var express = require('express');
const Vechile_controlers= require('../controllers/Vechile');
var router = express.Router();
/* GET costumes */
router.get('/', Vechile_controlers.Vechile_view_all_Page );
router.get('/Vechile/:id', Vechile_controlers.Vechile_detail); 
/* GET detail cars page */ 
router.get('/detail', Vechile_controlers.Vechile_view_one_Page); 
/* GET create cars page */ 
router.get('/create', Vechile_controlers.Vechile_create_Page);
/* GET create update page */
router.get('/update', Vechile_controlers.Vechile_update_Page);
/* GET delete costume page */
router.get('/delete', Vechile_controlers.Vechile_delete_Page);
module.exports = router;

