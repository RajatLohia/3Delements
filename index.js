const express= require('express');
const app=express();
const expresLayouts=require('express-ejs-layouts');
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