let KinoRouter = require('./kino-router');
let ParkRouter = require('./link Park-router');

let ApiRouter = require('express').Router();

ApiRouter.use(KinoRouter);
ApiRouter.use(ParkRouter);

module.exports = ApiRouter;
