const User = require('../models/userModels');

module.exports = {
    signUp : async (req, res, next) => {
        const user = new User(req.body);
        
        try{
            await user.save();
            res.status(201).send(user)
        }
        catch(e){
            res.status(400).send(e)
        }        
    },

    signIn : async (req, res, next) => {
        try{
            const user = await User.findUserByCredentials()
            res.send(user);
        }
        catch(e) {
            res.send(e)
        }
    },

    userById : async (req, res, next) => {
        try{
            const user = await User.findById(req.params.id);
            if(!user){
                throw new Error()
            }   
            res.status(200).send(user);
        }            
        catch(e){
            res.status(404).send(e);
        }
    },

    userProducts : async (req, res, next) => {
        try{
            
        }
        catch(e){

        }
    }
}