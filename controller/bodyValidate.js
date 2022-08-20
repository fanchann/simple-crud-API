const {
    body,
    validationResult
} = require('express-validator');

const valid = [
    body('name').notEmpty(),
    body('gender').notEmpty()
]

module.exports = {
    valid
}