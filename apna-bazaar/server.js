const express = require('express');
const app =  express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const PORT = 5000;
const DATA_PATH = path.resolve(__dirname, './server');

const readDataFile = (method, name) => {
    const data = fs.readFileSync(`${DATA_PATH}/${name}/index.${method}.json`, 'utf-8');
    return JSON.parse(data);
}

const banners = readDataFile('get', 'banners');
const products = readDataFile('get', 'products');
const categories = readDataFile('get', 'categories');
const addToCart = readDataFile('post', 'addToCart');

const logger = (req, res, next) => {
    console.info(`request: ${req.method} ${req.url}`);
    next();    
}

app.use(cors());
app.use(logger);

app.get('/banners', (req, res) => {
    res.send(banners)
});

app.get('/products', (req, res) => {
    res.send(products)
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.post('/addToCart', (req, res) => {
    res.send(addToCart)
});

app.post('/signin', (req, res) => {
    res.send({ response: 'Success', responseMessage: 'Login successful' });
});

app.post('/signup', (req, res) => {
    res.send({ response: 'Success', responseMessage: 'Signup successful' });
});

app.listen(PORT, () => {
    console.log(`API server has started listening on port ${PORT}`);
});
