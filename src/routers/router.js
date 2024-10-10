const {Router} = require('express')
const userRotas = require('./usuarioRotas');
const router = Router();


router.use('/user', userRotas);

module.exports = router