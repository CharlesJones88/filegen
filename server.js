const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const opn = require('opn');

const api = require('./server/routes/api');

const app = express();
global.path = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__direname, 'dist/index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Now running on localhost:${port}`);
    opn('http://localhost:8080');
});