let express = require('express');
let mongoose = require('mongoose');
let ApiRouter = require('./router/api-router');

let ArtistsModel = require('./models/kino');
let BandsModel = require('./models/bands');
let LinkinModel = require('./models/Linkin Park');

mongoose.connect('mongodb://localhost:27017/mongos', {useNewUrlParser: true});

let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(ApiRouter);

async function start(){
    await ArtistsModel.insertMany([
        {
            name: 'Victor',
            surname: 'Tsoi',
            group: 'Kino',
            age:28

        },
        {
            name: 'Alexey',
            surname: 'Rybin',
            group: 'Kino',
            age:58
        },
        {
            name: 'Oleg',
            surname: 'Valinsky',
            group: 'Kino',
            age:58

        },
        {
            name: 'Yuri',
            surname: 'Kasparyan',
            group: 'Kino',
            age:55
        },
        {
            name: 'Alexander',
            surname: 'Titov',
            group: 'Kino',
            age:61

        },
        {
            name: 'George',
            surname: 'Guryanov',
            group: 'Kino',
            age:61

        },
        {
            name: 'Igor',
            surname: 'Tikhomirov',
            group: 'Kino',
            age:58,
        },
    ]),
        await BandsModel.insertMany([
        {
            name: 'Kino',
            number:7

        },
        {
            name: 'Linkin Park',
            number:5
        },

    ]),
        await LinkinModel.insertMany([
            {
                name: 'Michael',
                surname: 'Shinoda',
                group: 'Linkin Park',
                age:42

            },
            {
                name: 'Joe',
                surname: 'Hahn',
                group: 'Linkin Park',
                age:42
            },
            {
                name: 'Bradford',
                surname: 'Delson',
                group: 'Linkin Park',
                age:41

            },
            {
                name: 'Robert',
                surname: 'Bourdon',
                group: 'Linkin Park',
                age:40
            },
            {
                name: 'David',
                surname: 'Farrell',
                group: 'Linkin Park',
                age:41

            }

        ])
}



app.use((err, req, res, next) => {
    res.status(404).json(err)
});

start().then(() => {
    console.log('ok');
});

app.listen(3000, () => {
   console.log('Listening...')
});
