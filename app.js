const express = require('express');
var sequelize = require("./models").sequelize;
const Book = require('./models').Book;
const routes = require('./routes');
const bodyParser = require('body-parser');

//set up all views in pug
//set up new book edit book
//validation
//404 route
//create search function
//integrate serach function
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

  
//   (async () => {
//     //Movie.sync() synchronizes table from db, sequelize.sync() does all
//     await sequelize.sync( 
//         //force completely drops & recreates table each time
//         { force: true } );
//   try{
//     // Instance of the Movie class represents a database row
//     const book = await Book.create({
//         title: "A Brief History of Time",
//         author: "Stephen Hawking",
//         genre: "Non Fiction",
//         year: 1988
//     })
//     await Book.create({
//         title: "Armada",
//         author: "Ernest Cline",
//         genre: "Science Fiction",
//         year: 2015
//     })
//   } catch(error){
//     console.error("Database error: ", error)
//   }

// })();
//starts listening on specfied port(localhost:3000). Server must be started with node app.js in terminal
sequelize.sync().then(app.listen(3000, () =>{
    console.log('The server is up and running')
}));