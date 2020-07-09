# SQL LIBRARY SITE

This project combines React and Bootstrap to make a simple gallery display.  

## APPLICATION SETUP
The 'Library of Unreal Books' is a web application that runs SQLite database. Upon loading, it executes a query for all the books in the library, which are then displayed.The header contains a search bar as well as a link to the 'Create New Book' page. 
![test link](./##SASS)
The table display links to update pages for all the books which have already been created, 
following these links takes the user to a form where updates can be performed. 
<br />
In addition to these main pages, there is a 404 error page, a general error page and a 'No Results' page. 

| Partial Query: |
| -- |
| ![results deliviered from a partial query](/example-img/full-view.png) |

It was based on a TeamTreehouse.com project, but the code is my own. 

## Concepts Demonstrated

The main technologies and concepts demonstrated in this project are
* Pug 
* Express 
* SQLite
* Sequelize
* Javascript
* Node.js
* REST API
* Responsive Design
* SASS
* CRUD

## PUG

Pages are templated in PUG - foremerly JADE. The site displays a main 'layout' view that contains the header (title and search functions) and footer. Content is broken up into a number of other views that can be found in the /views folder. 

## Express

Express used for routing, details on individual routes found in routes/index.js. Express routes handle PUG templating, makes queries to database to obtain book information. 

## SQLite & Sequelize 
- Why SQLite? 
SQLite is ideal since it is a light, serverless application. It works well for this application, which is intended to be downloaded and used by a single user who manages the library. The number of data types is limited in this application and works well with what is available in SQLite. 
The SQLite database is located in library.db

The database setup is simple, with no relations between tables. One model is defined with Sequelize, the 'Book' model which can be viewed in the /models/ folder. Sequqlize is used in retrieving data and building out the search functionality. 

### Search Functionality
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
The search returns results from all fields, and trims out whitespace. Some examples of this can be seen below:
| Partial Query: |
| -- |
| ![results deliviered from a partial query](/example-img/results-partial.png) |
| Case Insensitive: |
| -- |
| ![results deliviered from a fully capitalized query](/example-img/results-case-insensitive.png) |
| Year: |
| -- |
| ![results deliviered from searching the 'year' field](/example-img/results-year.png) |

### Update Book Search
The 'Update Book' pages are rendered through a query to the database to the individual book. Were the book just to be viewed, .filter() might be considered, but since the option to update is allowed the data is populated by a .findByPk() request.

## REST API 


## SASS  
The search button is inspired by Anh's 'command' button https://twitter.com/pwign

* Bootstrap Grid on Search Form and Nav Bar.
* Flexbox Gallery display.

Using built in grid systems, flexbox, default Bootstrap styles and utility classes, it allowed for a quick, clean setup of the Photo App for multiple sized devices. I wrote some custom HTML because the Bootstrap margin options weren't the fastest option for a project of this small scale. 
| Desktop |
| -- |
| ![React Flickr App as seen on desktop](/img/Desktop.png) |

| Tablet| Mobile |
| --- | --- |
| ![React Flickr App as seen on Tablet](/img/Tablet.png) | ![React Flickr App as seen on Mobile](/img/Mobile.png) |


## No Github Pages?

That's right - the project depends on a database file that's installed locally (library.db). <br />

If you want to run the project, you can download it quicly and try it out, otherwise all the code can be browsed here on GitHub. 

### Running the Application

Once the project files are downloaded, the user should run ```npm install``` followed by ```npm start``` to launch the application. <br />
It can the be viewed in the browser at [http://localhost:3000](http://localhost:3000).

### Liscence 
MIT