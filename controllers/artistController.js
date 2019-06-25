let ArtistsModel = require('../models/artist');
let controller = {};

controller.getById = async (req, res, next) => {
    res.json(await ArtistsModel.findById(req.params.id));
};

controller.getAll = controller.getAll = async (req, res, next) => {
    let artists = await ArtistsModel.find({});
    if (artists.length) {
        return res.json(artists);
    }
    start().then(() => {
        console.log('ok');
    });
    res.json(await ArtistsModel.find({}));
};

controller.create = async (req, res, next) => {
    res.json(await ArtistsModel.create(req.body));
};

controller.put = async (req, res, next) => {
    res.json(
        await ArtistsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    );
};

controller.delete = async (req, res, next) => {
    res.json(await ArtistsModel.findByIdAndRemove(req.params.id));
};

module.exports = controller;


async function start() {
    await ArtistsModel.insertMany([
        {
            name: 'Victor',
            surname: 'Tsoi',
            group: 'Kino',
            age: 28

        },
        {
            name: 'Alexey',
            surname: 'Rybin',
            group: 'Kino',
            age: 58
        },
        {
            name: 'Oleg',
            surname: 'Valinsky',
            group: 'Kino',
            age: 58

        },
        {
            name: 'Yuri',
            surname: 'Kasparyan',
            group: 'Kino',
            age: 55
        },
        {
            name: 'Alexander',
            surname: 'Titov',
            group: 'Kino',
            age: 61

        },
        {
            name: 'George',
            surname: 'Guryanov',
            group: 'Kino',
            age: 61

        },
        {
            name: 'Igor',
            surname: 'Tikhomirov',
            group: 'Kino',
            age: 58,
        },
    ])
}
