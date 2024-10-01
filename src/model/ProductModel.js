const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id : {
        type : Number
    },
    name : {
        type : String
    },
    price : {
        type : Number
    },
    colours : {
        type : String
    },
    cat : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    subcat : {
        type : Schema.Types.ObjectId,
        ref : 'SubCategory'
    },
    image : {
        type : String
    }
})

module.exports = mongoose.model('Products',productSchema)