const express = require('express');
const mongoose = require('mongoose');
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');
const cors = require('cors');
const db = require('./config/keys').mongoURI;
const user_route = require('./routes/user_route');
const app = express();

app.use(express.json());
app.use(cors());
app.use(
  history({
    verbose: true,
  }),
);

//check admin

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDb was connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/user', user_route);

if (process.env.NODE_ENV === 'production') {
  app.use(serveStatic(path.join(__dirname, '/client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
