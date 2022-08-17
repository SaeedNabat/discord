const {app} = require('./app')
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || process.env.API_PORT;

const server = http.createServer(app);

// connect to database
mongoose.connect(process.env.MONGO_URI).then(()=>{
    server.listen(PORT,()=>{
        console.log(`Server is listening on port : ${PORT}`);
    });
}).catch(err=>{
    console.log('database connection faield. Server not started');
    console.log(err);
})



