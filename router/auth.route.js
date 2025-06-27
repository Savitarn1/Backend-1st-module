const { Router } = require('express');
const AuthController = require('../controller/Auth.controller');

const router = Router();

router.post('/registr', AuthController.registr);
router.get('/activation/:id', AuthController.activation)

module.exports = router;
