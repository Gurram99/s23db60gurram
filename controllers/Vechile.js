var Vechile = require('../models/Vechile');

exports.Vechile_list = async function (req, res) {
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

// List of all Vechile
exports.Vechile_list = async function (req, res) {
    try {
        theVechile = await Vechile.find();
        res.send(theVechile);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Vechile_view_all_Page = async function (req, res) {
    try {
        theVechile = await Vechile.find();
        res.render('Vechile', { title: 'Vechile Search Results', results: theVechile });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Vechiles create on POST.
exports.Vechile_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vechiles();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Vechile_model":"Audi", "Vechile_year":2023, "Vechile_price":10000}
    document.Vechile_model = req.body.Vechile_model;
    document.Vechile_year = req.body.Vechile_year;
    document.Vechile_price = req.body.Vechile_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
