/* Book.js
Manpreet Kaur ,
Student Id-301175898
07/03/2021
COMP229-W2021-Midterm-301175898
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: '/'
   });
});



module.exports = router;
