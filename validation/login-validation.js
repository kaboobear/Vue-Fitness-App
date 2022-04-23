const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLogin(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';

  if (Validator.isEmpty(data.username))
    errors.username = 'Username is required';

  return { errors, isValid: isEmpty(errors) };
};
