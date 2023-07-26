const express = require('express')
const app = require('express')();
const router = require('./sources/routes/routes');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(router)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
});