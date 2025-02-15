const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

require('./dbs/mongo_db');
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(require('./router/index'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
