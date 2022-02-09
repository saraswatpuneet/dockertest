// simple express server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Running!'));

// hello endpoint
app.get('/hello', (req, res) => res.send('Hello World!'));

// serve it on port 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
