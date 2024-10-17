const {Router} = require('express');
const adminController = require('../controller/adminController');
const router = Router();

router.post('/', adminController.create);

router.put('/:id', adminController.update);

router.get('/:id', adminController.getOne);

router.get('/', adminController.getAll);

router.delete('/:id', adminController.delete);


module.exports = router