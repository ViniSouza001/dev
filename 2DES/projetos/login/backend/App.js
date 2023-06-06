const express = require('express')
const app = require('express')();
const router = require('./sources/routes/routes');

app.use(router)
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
});