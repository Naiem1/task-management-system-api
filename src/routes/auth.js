const { registerController } = require('../controllers/auth');

const router = require('express').Router();

router.post('/signup', registerController);

module.exports = router;
