const router = require('express').Router();
const User = require('../models/userModels');
const userControllers = require('../controllers/userControllers') 

router.route('/signUp')
    .post(userControllers.signUp);

router.route('/signIn')
    .post(userControllers.signIn);

router.route('/:id')
    .get(userControllers.userById);

module.exports = router;