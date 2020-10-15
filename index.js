const express= require('express');
const db=require('./config/mongoose');
const app=express();
const expresLayouts=require('express-ejs-layouts');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.use(express.static('./assets'));
app.use(expresLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

const port=8000;

app.use(express.urlencoded({ extended: true }));


app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name: 'codeial',
    secret: 'hahahahha',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
    ,
    // store: new MongoStore(
    //     {
    //         mongooseConnection: db,
    //         autoRemove: 'disabled'
        
    //     },
    //     function(err){
    //         console.log(err ||  'connect-mongodb setup ok');
    //     }
    // )
}));

app.use(passport.initialize());
app.use(passport.session());

//it is middleware which is being called everytime to check if a cookie is present or not
app.use(passport.setAuthenticatedUser);



app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err)
    {
        console.log(`error in running the server ${err}`);
    }
    console.log(`server is running on the port: ${port}`);
})