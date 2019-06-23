let router = require('express').Router();
let artistController = require('../controllers/artistController');

router.get('/', artistController.getAll);
router.get('/:id', artistController.getById);
router.post('/', artistController.create);
router.put('/:id', artistController.put);
router.delete('/:id', artistController.delete);

module.exports = router;

