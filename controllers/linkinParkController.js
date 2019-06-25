let linkinParkModel = require('../models/linkinPark');
let controller = {};

controller.getById = async (req, res, next) => {
    res.json(await linkinParkModel.findById(req.params.id));
};

controller.getAll = controller.getAll = async (req, res, next) => {
    let artists = await linkinParkModel.find({});
    if (artists.length) {
        return res.json(artists);
    }
    start().then(() => {
        console.log('ok');
    });
    res.json(await linkinParkModel.find({}));
};

controller.create = async (req, res, next) => {
    res.json(await linkinParkModel.create(req.body));
};

controller.put = async (req, res, next) => {
    res.json(
        await linkinParkModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    );
};

controller.delete = async (req, res, next) => {
    res.json(await linkinParkModel.findByIdAndRemove(req.params.id));
};

module.exports = controller;

async function start() {
    await linkinParkModel.insertMany([
        {
            name: 'Michael',
            surname: 'Shinoda',
            group: 'Linkin Park',
            age: 42

        },
        {
            name: 'Joe',
            surname: 'Hahn',
            group: 'Linkin Park',
            age: 42
        },
        {
            name: 'Bradford',
            surname: 'Delson',
            group: 'Linkin Park',
            age: 41

        },
        {
            name: 'Robert',
            surname: 'Bourdon',
            group: 'Linkin Park',
            age: 40
        },
        {
            name: 'David',
            surname: 'Farrell',
            group: 'Linkin Park',
            age: 41

        }

    ])
}
