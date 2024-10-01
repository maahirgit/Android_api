const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OtpSchema = new Schema ({
    otp : {
        type : Number
    },
    email : {
        type : String
    },
    time:{
        type : Date
    }
})

module.exports = mongoose.model('Auth',OtpSchema)