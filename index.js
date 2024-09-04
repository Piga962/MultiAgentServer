const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const port = 3000;

const jsonRoutes = require('./routes/jsonRoutes');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/json', jsonRoutes);