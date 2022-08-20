const response = (msg, res) => {
    let data = {
        'status': msg[0],
        'message': msg[1],
        Data: msg[2]
    }
    res.json(data)
    res.end()
}

module.exports = {
    response
}