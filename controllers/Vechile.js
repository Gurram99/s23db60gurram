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
    let document = new Vechile();
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

//New code for Assigment12 for screenshot1
exports.Vechile_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Vechile.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//New code for Assignment 12 for screenshot2
//Handle Vehicle update form on PUT
exports.Vechile_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Vechile.findById(req.params.id)
        // Do updates of properties
        if (req.body.Vechile_model)
            toUpdate.Vechile_model = req.body.Vechile_model;
        if (req.body.Vechile_year) toUpdate.Vechile_year = req.body.Vechile_year;
        if (req.body.Vechile_price) toUpdate.Vechile_price = req.body.Vechile_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

//Newly added code for Assigment 12 (Screenshot 4 and 5)
// Handle cars delete on DELETE.
exports.Vechile_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Vechile.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

      //New code added for Assignment 12 (screenshot 6)
   // Handle a show one view with id specified by query
exports.Vechile_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Vechile.findById( req.query.id)
    res.render('Vechiledetail', 
   { title: 'Vechile Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

//New code added for Assignment 12 (screenshot 7)
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Vechile_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Vechilecreate', { title: 'Vechile Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };