const express = require('express');
const router = express.Router();

const passport = require('passport');

const usersController= require('../controllers/users_Controller');

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

router.post('/create',usersController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-up'}
)
 ,usersController.createSession
);

module.exports= router;

