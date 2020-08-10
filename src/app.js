//  module imports
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const db = require('./db/db')

const userRoutes = require('./routes/userRoutes')

//  instantiating server 
const app = express();
const server = http.createServer(app);

const port = process.env.PORT;

//  express middlewares
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.use(morgan("combined"));

app.use('/users', userRoutes)

app.get('/', (req, res, next) => {
    res.send('This is the Home Page')
})

server.listen(port , () => {
    console.log(`server listening at ${port}`);
})

