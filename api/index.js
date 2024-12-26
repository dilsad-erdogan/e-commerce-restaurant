const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var connectDB = require('./config/mongoDB');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});