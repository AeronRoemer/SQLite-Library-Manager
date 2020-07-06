const express = require('express');
const sequelize = require("./models").sequelize;
const Book = require('./models').Book;
const routes = require('./routes');
const bodyParser = require('body-parser');

//language function
//css improvements
//a11y check

const app = express();
//sets the view engine as pug for render requests
app.set('view engine', 'pug');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // does not support encoded bodies

//serve static files (CSS)
app.use('/static', express.static('public/stylesheets'));

app.use('/', routes); //uses 'routes/index.js'

//creates error
app.use((req, res, next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

//error handler
app.use(( err, req, res, next ) => {
  res.locals.error = err;
  if (err.status >= 100 && err.status < 600)
    res.status(err.status);
  else
    res.status(500);
  res.render('404NoFound');
});

//starts listening on specfied port(localhost:3000). Server must be started with node app.js in terminal
sequelize.sync().then(app.listen(3000, () =>{
    console.log('The server is up and running')
}));