const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'third_API'
})
const urlencoded = bodyParser.urlencoded({
    extended: false
});


app.post('/post', urlencoded, (req, res) => {
    title: req.body.title,
        content: req.body.content,
            connect.connect((err) => {
                if (err) throw err
                console.log('connected')
        })
})