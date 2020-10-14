const User = require('../models/user');

module.exports.signUp = function(req, res){
    // if (req.isAuthenticated()){
    //     return res.redirect('/users/profile');
    // }


    return res.render('user_sign_up', {
        title: "3Delements | Sign Up"
    })
}

module.exports.signIn = function(req, res){

    // if (req.isAuthenticated()){
    //     console.log('profile to go')
    //     return res.redirect('/users/profile');
    // }
    return res.render('user_sign_in', {
        title: "3Delements | Sign In"
    })
}


module.exports.create= function(req, res)
{
    // to-do later
}

module.exports.createSession = function(req, res){
    // to-do later
}