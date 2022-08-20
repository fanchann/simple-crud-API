const getData = `SELECT * FROM ??`
const addData = `INSERT INTO users(??,??) VALUES (?)`
const getUserById = `SELECT * FROM ?? WHERE id=?`
const deleteById = `DELETE FROM ?? WHERE id=?`

module.exports = {
    getData,
    addData,
    getUserById,
    deleteById
}