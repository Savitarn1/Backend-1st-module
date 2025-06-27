const { Router } = require('express');
const UserController = require('../controller/User.controller.js');
const logger = require('../middlewares/logger.js');

const router = Router();

router.get('/', logger, UserController.getAllUsers);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);

module.exports = router;
