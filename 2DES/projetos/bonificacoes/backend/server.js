const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes/funcionario.routes.js')

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 3000
module.exports = PORT;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});