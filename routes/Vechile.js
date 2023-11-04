var express = require('express');
const Vechile_controlers= require('../controllers/Vechile');
var router = express.Router();
/* GET costumes */
router.get('/', Vechile_controlers.Vechile_view_all_Page );
module.exports = router;
