let router = require('express').Router();
let linkinParkController = require('../controllers/linkinParkController');

router.get('/', linkinParkController.getAll);
router.get('/:id', linkinParkController.getById);
router.post('/', linkinParkController.create);
router.put('/:id', linkinParkController.put);
router.delete('/:id', linkinParkController.delete);

module.exports = router;
