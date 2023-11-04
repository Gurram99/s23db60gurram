const { Double } = require("mongodb")
const mongoose = require("mongoose")
const VechileSchema = mongoose.Schema({
    // Vechile_Model: String,
    // Vechile_year: String,
    // Vechile_price: Number
    Vechile_model: {
        type: String,
        required: true
    },
    Vechile_year: {
        type: String,
        required: true
    },
    Vechile_price: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("Vechile", 
VechileSchema)