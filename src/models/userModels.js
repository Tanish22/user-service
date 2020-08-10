const mongoose = require('mongoose');
const validator = require('validator');
const argon2 = require('argon2')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
        validation : function (value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid Email Address');
            }
        }
    },

    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 14,
        trim : true,
        validation : function (value){
            if(value.toLowerCase().includes('password')){
                throw new Error ('Your password cannot contain the PASSWORD')
            }
        }
    },

    cart : [{
        products : [{
            type : mongoose.Schema.Types.ObjectId
        }]
    }]
})

// userSchema.statics.findUserByCredentials = async (email, password) => {
//     const user = await User.find({email});

//     if(!user){
//         throw new Error('Cannot login !!')
//     }

//     const isEqual = await argon2 compare(password, )
// }


const User = mongoose.model('User', userSchema);

module.exports = User;
