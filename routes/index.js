
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
    
//new book post
router.post('/', asyncHandler(async (req, res) =>{
    await Books.create(req.body);
    res.redirect('/')
    }))

//update book render
router.get('/update_book/:id', asyncHandler(async (req, res) =>{
    const book = await Books.findByPk(req.params.id)
    res.render('update_book', {book})
}))

//update book post
router.post('/update_book/:id', asyncHandler(async (req, res) =>{
    book = await Books.findByPk(req.params.id);
    await book.update(req.body);
    res.redirect('/');
}))

//delete book post
router.post('/update_book/:id/delete', asyncHandler(async (req, res) =>{
    book = await Books.findByPk(req.params.id);
    console.log(book);
    await book.destroy();
    res.redirect('/');
}))


module.exports = router