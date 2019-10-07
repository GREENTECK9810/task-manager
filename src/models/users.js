const mongoose = require('mongoose')
const validator = require('validator')



const User = mongoose.model('User',{
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        minlength: 7,
        require: true,
        trim: true,
        validate(value){
            if(value.includes("password")){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

module.exports = User