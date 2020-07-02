const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op
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

//book search
router.get('/search_results', asyncHandler(async (req, res) =>{
    const search = req.query.query

    const books = await Books.findAll({
      where: {
        [Op.or]: [
            {title: { [Op.like]: `%${search}%` }},
            {author: { [Op.like]: `%${search}%` }},
            {genre: { [Op.like]: `%${search}%` }},
            {year: { [Op.like]: `%${search}%` }}
        ]
    }
    }).then((books)=>{
        if(books.length > 0) {
          res.render('search_results', { books })
         } else {
          res.render('no_results')
         }
      })

     }))

//new book render
router.get('/new_book', (req, res) =>{
        res.render('new_book')
    })
    
//new book post
router.post('/new_book', asyncHandler(async (req, res) =>{
    try {
        await Books.create(req.body);
        res.redirect('/')
   } catch (error){
    if(error.name === "SequelizeValidationError") { // checking the error
        const book = await Books.build(req.body);
        res.render("update_book", { book, errors: error.errors})
      } else {
        throw error; // error caught in the asyncHandler's catch block
      }
   }
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
    if(book) {
        await book.destroy();
        res.redirect("/");
      } else {
          //if being directed to update page from A new book missing a title,
         // 'delete' will actually redirect to home since no book was actually created
        res.redirect("/");
      }
}))


module.exports = router
