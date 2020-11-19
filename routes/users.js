const express = require('express');
const router = express.Router();
const models = require('../models/users.js');


//FULL CRUD
router.get('/', models.getAll);
router.get('/:id', models.getUserByID)
router.post('/register', models.addUser);
router.post('/:id/delete', models.deleteUser)
router.post('/:id/update', models.updateUser)

module.exports = router;
