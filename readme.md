# SQL LIBRARY SITE

This project combines React and Bootstrap to make a simple gallery display.  

It was based on a TeamTreehouse.com project, but the code is my own. 

## Concepts Demonstrated

The main technologies and concepts demonstrated in this project are
* Pug
* Express 
* SQLite
* Sequelize
* Javascript
* Node.js
* API Calls
* Responsive Design
* CRUD

### React-Bootstrap Framework

Using both the React-Bootstrap and Bootstrap libraries, these framworks sped up styling on the project. 

* Bootstrap Grid on Search Form and Nav Bar.
* Flexbox Gallery display.

Using built in grid systems, flexbox, default Bootstrap styles and utility classes, it allowed for a quick, clean setup of the Photo App for multiple sized devices. I wrote some custom HTML because the Bootstrap margin options weren't the fastest option for a project of this small scale. 
| Desktop |
| -- |
| ![React Flickr App as seen on desktop](/img/Desktop.png) |

| Tablet| Mobile |
| --- | --- |
| ![React Flickr App as seen on Tablet](/img/Tablet.png) | ![React Flickr App as seen on Mobile](/img/Mobile.png) |


### React Router

Used Routes, Links, and NavLinks to create navigation around the site. 
* The main App.js employs a Switch and Routes to navigate through the content. 
* The top tag routes are created by using params, and change along with the tags. 
* The Search Bar redirects the user to a /search/ URL on click.
* 404 route displays for nonexistent routes.

In the future, I would like to add routes based on location.search data and query strings. Some commented out code is at the bottom of App.js and SearchForm.js. Ideally, the site and results can be accessed directly via a URL ending in a query string. 

## React Router

Used Routes, Links, and NavLinks to create navigation around the site. 
* The main App.js employs a Switch and Routes to navigate through the content. 
* The top tag routes are created by using params, and change along with the tags. See NavBar.js and App.js to check this out.  
* The Search Bar redirects the user to a /search/ URL on click.
* 404 route displays for nonexistent routes.

In the future, I would like to add routes based on location.search data and query strings. Some commented out code is at the bottom of App.js and SearchForm.js. Ideally, the site and results can be accessed directly via a URL ending in a query string. 

## No Github Pages?

That's right - the project depends on a config.js file that's ignored in .gitignore. It contains my flickr API key, which I don't want to give out publically. 

If you want to run the project, you can download it and supply your own key. Config.js just needs to export the API key, which is imported on line 10 of App.js

Just use the following scripts:

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Licsence 
MIT