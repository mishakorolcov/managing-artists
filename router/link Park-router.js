let router = require('express').Router();
let LinkinModel = require('../models/Linkin Park');

router.get('/api/linkin/:id', async (req, res, next) => {
    res.json(await LinkinModel.findById(req.params.id));
});


router.get('/api/linkin', async (req, res, next) => {
    res.json(await LinkinModel.find({}));
});


router.post('/api/linkin', async (req, res, next) => {
    res.json(await LinkinModel.create(req.body));
});


router.put('/api/linkin/:id', async (req, res, next) => {
    res.json(
        await LinkinModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    );
});


router.delete('/api/linkin/:id', async (req, res, next) => {
    res.json(await LinkinModel.findByIdAndRemove(req.params.id));
});

module.exports = router;
