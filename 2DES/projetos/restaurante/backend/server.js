const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes/routes.js');

app.use(cors())
app.use(express.json());
app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});