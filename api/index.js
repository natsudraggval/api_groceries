const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());

// Serve static files (images) from public
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Read from product.json
app.get('/products', (req, res) => {
    const dataPath = path.join(__dirname, 'product.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ message: 'Error reading product.json' });
        }
        res.send(JSON.parse(data));
    });
});

module.exports = app;
module.exports.handler = serverless(app);
