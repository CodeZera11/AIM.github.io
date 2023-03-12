const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const port = 8000;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

//Endpoints
app.get('/', (req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/contact', (req,res)=>{
    res.status(200).render('contact.pug');
});

//Start the server
app.listen(port, ()=>{
    console.log(`The application started on port ${port}`);
});