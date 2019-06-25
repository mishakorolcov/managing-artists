let BandsModel = require('../models/bands');
let controller = {};

controller.getById = async (req, res, next) => {
    res.json(await BandsModel.findById(req.params.id));
};

controller.getAll = controller.getAll = async (req, res, next) => {
    let artists = await BandsModel.find({});
    if (artists.length) {
        return res.json(artists);
    }
    start().then(() => {
        console.log('ok');
    });
    res.json(await BandsModel.find({}));
};

controller.create = async (req, res, next) => {
    res.json(await BandsModel.create(req.body));
};

controller.put = async (req, res, next) => {
    res.json(
        await BandsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    );
};

controller.delete = async (req, res, next) => {
    res.json(await BandsModel.findByIdAndRemove(req.params.id));
};

module.exports = controller;

async function start() {
    await BandsModel.insertMany([
        {
            name: 'Kino',
            number: 7

        },
        {
            name: 'Linkin Park',
            number: 5
        },

    ])
}
