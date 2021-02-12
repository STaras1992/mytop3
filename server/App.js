const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const searchRouter = require('./routes/searchRouter');
const infoRouter = require('./routes/infoRouter');
const fs = require('fs');

const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  next();
});

const limiter = rateLimit({
  max: 100,
  windowMs: 60000, //1min
  message: 'Too many requests from same IP.Try later',
});
app.use('/api', limiter);

app.use('/api/search', searchRouter);
app.use('/api/info', infoRouter);

module.exports = app;
