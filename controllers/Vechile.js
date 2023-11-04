var Vechile = require('../models/Vechile');

exports.Vechile_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Vechile list');
};
// for a specific Vechile.
exports.Vechile_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Vechile detail: ' + req.params.id);
};
// Handle Vechile create on POST.
exports.Vechile_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Vechile create POST');
};
// Handle Vechile delete form on DELETE.
exports.Vechile_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Vechile delete DELETE ' + req.params.id);
};
// Handle Vechile update form on PUT.
exports.Vechile_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Vechile update PUT' + req.params.id);
};