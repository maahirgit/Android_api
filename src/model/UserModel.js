const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    status : {
        type : Boolean,
        default : true
    }
})

module.exports = mongoose.model('User',userSchema)