const mongoose = require("mongoose");


const budget_schema = new mongoose.Schema({
    Title: {
        type: String, 
        required: true 
    },
    budget:{
        type: Number, 
        required: true

    },
    color:{
        type: String,
        required: true,
        minlength: 6
    }
}, {collection: 'budget_data'});

module.exports = mongoose.model('budget_data', budget_schema);
