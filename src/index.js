const express = require('express');
const path = require('path');

const app = express();
const PORT = 1269;

app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../public/')));