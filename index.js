const express= require('express');
const db=require('./config/mongoose');
const app=express();
const expresLayouts=require('express-ejs-layouts');


app.use(express.static('./assets'));
app.use(expresLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

const port=8000;

app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err)
    {
        console.log(`error in running the server ${err}`);
    }
    console.log(`server is running on the port: ${port}`);
})