const validate = require('../controller/bodyValidate');
const controller = require('../controller/controller')
const express = require('express'),
    router = express.Router(),
    db = require('../config/database')


//get user list
router.get('/list', controller.getList);

//create new user
router.post('/new', validate.valid, controller.createUser);

///show user!
//FROM `users` WHERE `users`.`id`
router.get('/:id', controller.getUserById)

//delete data
router.delete('/:id', controller.deleteUserById)


module.exports = router