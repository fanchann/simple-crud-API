const {
    validationResult
} = require('express-validator');
const db = require('../config/database'),
    sqlQuery = require('../config/sqlQuery'),
    status = require('../config/response')


const getList = (req, res) => {

    db.query(sqlQuery.getData, ["users"], (err, data, field) => {
        if (err) throw err;
        status.response([true, "Data Mahasiswa", data], res)
    })
}

const createUser = (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        status.response([false, error], res)
    }
    let values = [req.body.name, req.body.gender]
    db.query(sqlQuery.addData, ["name", "gender", values], (err, data, field) => {
        if (err) throw err;
        status.response([true, "User added"], res)
    })
}


const getUserById = (req, res) => {
    const id = req.params.id
    db.query(sqlQuery.getUserById, ["users", id], (err, rows) => {
        if (err) throw err;
        status.response([true, "Detail user data", rows[0]], res)
    })
}


const deleteUserById = (req, res) => {
    let id = req.params.id;

    db.query(sqlQuery.deleteById, ["users", id], (err, rows) => {
        if (err) {
            status.response([false, "Error while delete data"], res)
        } else if (id == undefined) {
            status.response([false, "Nothing data"], res)
        } else {
            status.response([true, "Delete data succes"], res)
        }
    })

}




module.exports = {
    getList,
    createUser,
    getUserById,
    deleteUserById
}