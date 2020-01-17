const express = require('express');
const mongoose = require('mongoose');

const { username, password, cluster, database } = require('../src/util/database');

const app = express();

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello World')
});

app.listen(3333);