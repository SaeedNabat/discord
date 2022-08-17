const express = require('express');
const cors = require('cors');
const app = express();

// import routes
const auth = require('./routes/auth');

app.use(express.json());
app.use(cors());
// register the routes
app.use('/api/v1/auth',auth);
exports.app = app;