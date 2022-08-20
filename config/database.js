let mysql = require('mysql');

const info = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'third_API'
}

let connection = mysql.createConnection(info)


connection.connect(error => {
    if (!!error) {
        console.log(error)
    } else {
        console.log(`Connection succes at ${info.database}`)
    }
});

module.exports = connection;