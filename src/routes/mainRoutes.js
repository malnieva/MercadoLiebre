const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/registro', mainController.registro);

router.get('/login', mainController.login);

router.get('*', mainController.error);

module.exports = router;