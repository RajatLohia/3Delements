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

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        // req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        // if(err){req.flash('error', err); return}

        if (!user){
            User.create(req.body, function(err, user){
                // if(err){req.flash('error', err); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            // req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }

    });
}

module.exports.createSession = function(req, res)
{
    // req.flash('success', 'Logged in Successfuly')
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    // req.flash('success', 'you have logged out')
    return res.redirect('/');
}