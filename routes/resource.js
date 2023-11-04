var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Vechile_controller = require('../controllers/Vechile');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Vechile ROUTES ///
// POST request for creating a vechile. 
router.post('/Vechile', Vechile_controller.Vechile_create_post);
// DELETE request to delete Vechile.
router.delete('/Vechile/:id', Vechile_controller.Vechile_delete);
// PUT request to update Vechile.
router.put('/Vechile/:id', Vechile_controller.Vechile_update_put);
// GET request for one Vechile.
router.get('/Vechile/:id', Vechile_controller.Vechile_detail);
// GET request for list of all Vechile items.
router.get('/Vechile', Vechile_controller.Vechile_list);
module.exports = router;