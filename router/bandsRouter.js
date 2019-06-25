let router = require('express').Router();
let bandsController = require('../controllers/bandsController');

router.get('/', bandsController.getAll);
router.get('/:id', bandsController.getById);
router.post('/', bandsController.create);
router.put('/:id', bandsController.put);
router.delete('/:id', bandsController.delete);

module.exports = router;
