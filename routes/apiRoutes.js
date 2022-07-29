const router = require('express').Router();
const notesRoutes = require('./noteRoutes')
router.use(notesRoutes);



module.exports = router;

//you have to have express -npm install express
//https://www.npmjs.com/package/express