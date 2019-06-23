let express = require('express');
let mongoose = require('mongoose');
let app = express();
mongoose.connect('mongodb://localhost:27017/task', {useNewUrlParser: true});
let apiRouter = require('./router/api-router');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
    res.status(404).json(err)
});

app.listen(3000, () => {
    console.log('Listening...')
});
