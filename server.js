
const PORT = process.env.PORT || 3306;

const express = require('express');
const app = express();


const fs = require('fs');
const path = require('path');


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    
    console.log(`API server now on port ${PORT}!`);
});


//node server.js
//npm install -g nodemon then nodemon server.js
//i prefer running my programs with Nodemon file.js so that i don't have to exit and restart the server
//you can use control c to exit the process at anytime (that is on a mac it may vary for other systems)