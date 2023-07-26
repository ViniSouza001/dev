require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes/funcionario.routes.js');
const methodOverride = require('method-override');
const moment = require('moment')

app.use(express.json());
app.use(cors());
app.use(router);

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(moment)

const PORT = 3000
module.exports = PORT;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});