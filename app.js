const express = require('express');
const app = express();

const charityWorkRoutes = require('./api/routes/charityWorks');

//routes which should handle request
app.use('/charityWorks',charityWorkRoutes);


module.exports = app;
