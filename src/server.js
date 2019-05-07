import routes from './routes/index';
import Environment from './Environment';
import express from 'express';
import morgan from 'morgan';

const app = express();

/** Log System */
app.use(morgan('combined'));

/** template */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/** Home */
app.get('/', routes.home);

app.listen(Environment['PORT'], function() {
  console.log('Listening on port 3000..');
});

app.use(express.static('public'));