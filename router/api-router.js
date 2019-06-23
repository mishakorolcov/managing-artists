let router = require('express').Router();

let artistRouter = require('./artistRouter');
let parkRouter = require('./linkinParkRouter');
let bandsRouter = require('./bandsRouter');

router.use('/artist', artistRouter);
router.use('/linkinPark', parkRouter);
router.use('/bands', bandsRouter);

module.exports = router;
