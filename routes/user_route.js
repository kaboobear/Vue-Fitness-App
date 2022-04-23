const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = require('../config/keys').jwtKey;
const User = require('../models/user_model');
const auth = require('../middleware/auth');

const validateLogin = require('../validation/login-validation');
const validateRegister = require('../validation/register-validation');

const signToken = (userId) => {
  return jwt.sign(
    {
      iss: secretKey,
      sub: userId,
    },
    secretKey,
    { expiresIn: '360000000000' },
  );
};

router.get('/info', auth, (req, res) => {
  User.findById(req.user.sub).then((user) => res.json({ user }));
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) return res.status(404).json({ username: 'User not foung' });

    const token = signToken(user._id);
    res.cookie('access_token', token, {
      httpOnly: true,
      sameSite: true,
    });

    res.status(200).json({ user, token });
  });
});

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ username: req.body.username }).then((user) => {
    if (user) return res.status(400).json({ username: 'User already exists' });
    else {
      const newUser = new User({ username: req.body.username });
      newUser
        .save()
        .then((createdUser) => {
          const token = signToken(createdUser._id);

          res.status(200).json({ user: createdUser, token });
        })
        .catch((err) => console.log(err));
    }
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie('access_token');
  res.json({ success: true });
});

module.exports = router;
