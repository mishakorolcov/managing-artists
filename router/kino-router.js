let router = require('express').Router();
let ArtistsModel = require('../models/kino');

router.get('/api/artists/:id', async (req, res, next) => {
    res.json(await ArtistsModel.findById(req.params.id));
});

router.get('/api/artists', async (req, res, next) => {
    res.json(await ArtistsModel.find({}));
});

router.post('/api/artists', async (req, res, next) => {
    res.json(await ArtistsModel.create(req.body));
});

router.put('/api/artists/:id', async (req, res, next) => {
    res.json(
        await ArtistsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    );
});

router.delete('/api/artists/:id', async (req, res, next) => {
    res.json(await ArtistsModel.findByIdAndRemove(req.params.id));
});
module.exports = router;
