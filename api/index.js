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

app.use('/categorie', require('./routes/categorie'))
app.use('/onlineOrder', require('./routes/onlineOrder'))
app.use('/order', require('./routes/order'))
app.use('/product', require('./routes/product'))
app.use('/reservation', require('./routes/reservation'))
app.use('/role', require('./routes/role'))
app.use('/table', require('./routes/table'))
app.use('/user', require('./routes/user'))

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("Homepage");
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});