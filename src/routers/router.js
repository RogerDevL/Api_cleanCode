const {Router} = require('express')
const userRotas = require('./usuarioRotas');
const adminRotas = require('./adminRotas');
const adminController = require('../controller/adminController');
const router = Router();


router.use('/user', userRotas);

router.use('/admin', adminRotas);

router.use('/login', adminController.login);


module.exports = router;