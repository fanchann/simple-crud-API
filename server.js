const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    usersRouter = require('./routes/posts')


//make server

const server = {
    port: 8080
};

//use modules

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//use router
app.use('/users', usersRouter)

//listen port
app.listen(server.port, () => {
    console.log(`Server started in localhost:${server.port}`)
})