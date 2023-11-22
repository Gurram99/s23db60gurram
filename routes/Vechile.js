var express = require('express');
const Vechile_controlers= require('../controllers/Vechile');
var router = express.Router();

//new code for Assignment13
//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
  
/* GET costumes */
router.get('/', Vechile_controlers.Vechile_view_all_Page );
router.get('/Vechile/:id', Vechile_controlers.Vechile_detail); 
/* GET detail cars page */ 
router.get('/detail',secured, Vechile_controlers.Vechile_view_one_Page); 
/* GET create cars page */ 
router.get('/create',secured, Vechile_controlers.Vechile_create_Page);
/* GET create update page */
router.get('/update',secured, Vechile_controlers.Vechile_update_Page);
/* GET delete costume page */
router.get('/delete',secured, Vechile_controlers.Vechile_delete_Page);
module.exports = router;

