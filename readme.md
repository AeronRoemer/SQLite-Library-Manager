# SQL LIBRARY SITE

This project combines React and Bootstrap to make a simple gallery display.  

## APPLICATION SETUP
The 'Library of Unreal Books' is a web application that runs SQLite database. Upon loading, it executes a query for all the books in the library, which are then displayed.The header contains a search bar as well as a link to the 'Create New Book' page. 
<br />
The table display links to update pages for all the books which have already been created, 
following these links takes the user to a form where updates can be performed. 
<br />
In addition to these main pages, there is a 404 error page, a general error page and a 'No Results' page. 

| Main Page |
| -- |
| ![results deliviered from a partial query](/example-img/full-view.png) |

It was based on a TeamTreehouse.com project, but the code is my own. 

## Concepts Demonstrated

The main technologies and concepts demonstrated in this project are:

* SQLite
* Sequelize
* REST API
* Express 
* Pug/HTML5
* SASS/CSS3
* Responsive Design
* Javascript
* Node.js


## SQLite & Sequelize 
- Why SQLite? 
SQLite is ideal since it is a light, serverless application. It works well for this application, which is intended to be downloaded and used by a single user who manages the library. The number of data types is limited in this application and works well with what is available in SQLite. <br />
The SQLite database is located in library.db <br />
The database setup is simple, with no relations between tables. One model is defined with Sequelize, the 'Book' model which can be viewed in the /models/ folder. Sequelize is used in retrieving data and building out the search functionality, for example:
```Books.findAll({
      where: {
        [Op.or]: [
            {title: { [Op.like]: `%${search}%` }},
            {author: { [Op.like]: `%${search}%` }},
            {genre: { [Op.like]: `%${search}%` }},
            {year: { [Op.like]: `%${search}%` }}
        ]
    }})
```
<br />
The 'Update Book' pages are rendered through a query to the database to the individual book. Were the book just to be viewed, .filter() might be considered, but since the option to update is allowed the data is populated by a .findByPk() request.

## REST
The library application is an example of a REST API, all data is returned in JSON format. 
Endpoints return information from the SQLite database. More details on the functionality of some of these endpoints can be found below. 

## CRUD Operations

Routes found in the /routes/index.js file allow the user to
- Create Books
- Read from database in search or in full from home route
- Update books
- Destroy books

#### READ - Homepage & Search Functionality
The homepage renders a table populated with data returned from a database query. 
<br />
The search returns results from all fields, and trims out whitespace. Some examples of this can be seen below:
| Partial Query: |
| -- |
| ![results deliviered from a partial query](/example-img/results-partial.png) |
| Case Insensitive: |
| ![results deliviered from a fully capitalized query](/example-img/results-case-insensitive.png) |
| Year: |
| ![results deliviered from searching the 'year' field](/example-img/results-year.png) |

#### UPDATE/DESTROY - Update Book Page
The 'Update Book' form also has an option to destroy the book that already exists. To see the full code, visit /routes/index.js
| Update Book |
| -- |
| ![Update/Destory Page](/example-img/update-form.png) |

#### CREATE
The 'Create New Book' page allows the user to submit a new entry to the database. 
| New Book |
| -- |
| ![Create New Book Page](/example-img/new-form.png) |

###  Express
Express is used for routing, details on individual routes found in routes/index.js. Express routes handle CRUD operations and render the various views required by each route. 

## Pug Templating

Pages are templated in Pug - foremerly JADE.
Advantages of PUG include 
- Prevents Header HTML from getting re-written for various pages. 
- Allows use of varaiables in views files, streamlining code when results are delivered. 

### SASS & CSS
The CSS for this project was created in SASS, a CSS preprocessor. Extensive CSS styling on this project was limited, due to the fact that it is not hosted on GitHub pages. 
<br />
The design is responsive, using flexbox and a media query to offer different layouts depending on screen size. 

| Desktop |
| -- |
| ![Library App as seen on desktop](/example-img/full-view.png) |

| Desktop| Mobile |
| --- | --- |
| ![Library App as seen on desktop](/example-img/full-view.png) | ![Library App as seen on mobile](/example-img/mobile-view.png) |


## No Github Pages?

That's right - the project depends on a database file that's installed locally (library.db). <br />

If you want to run the project, you can download it quicly and try it out, otherwise all the code can be browsed here on GitHub. 

### Running the Application

Once the project files are downloaded, the user should run ```npm install``` followed by ```npm start``` to launch the application. <br />
It can the be viewed in the browser at [http://localhost:3000](http://localhost:3000).

### Liscence 
MIT