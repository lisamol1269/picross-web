const express = require('express');

const app = express();
const PORT = 1269;

app.listen(() => {
    console.log(`Listening: http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../public/')));