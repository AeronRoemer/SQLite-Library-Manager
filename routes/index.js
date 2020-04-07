
const express = require('express');
const router = express.Router();
const Books = require('../models').Book

/* Handler function to wrap each route. */
function asyncHandler(cb){
    return async(req, res, next) => {
      try {
        await cb(req, res, next)
      } catch(error){
        res.status(500).send(error);
      }
    }
  }

//home page render
router.get('/', asyncHandler(async (req, res) =>{
const books = await Books.findAll();
    res.render('books', { books })
}))

//new book render
router.get('/new_book', (req, res) =>{
        res.render('new_book')
    })
    


module.exports = router