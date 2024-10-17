const {Router} = require('express')
const userRotas = require('./usuarioRotas');
const adminRotas = require('./adminRotas');
const router = Router();


router.use('/user', userRotas);

router.use('/admin', adminRotas);


module.exports = router;