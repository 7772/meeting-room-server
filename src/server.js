import routes from './routes/index';
import Environment from './Environment';

const express = require('express');
const morgan = require('morgan');

const app = express();

/** Log System */
app.use(morgan('combined'));

/** Home */
app.get('/', routes.home);

app.listen(Environment['PORT'], function() {
  console.log('Listening on port 3000..');
});