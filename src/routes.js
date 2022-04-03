const express = require('express');
const app = express();

const upload = require('./config/multer');

const {
    getDrinks,
    createDrink,
    updateDrink,
    deleteDrink,
} = require('./controllers/drinksController');

app.get('/', getDrinks);
app.post('/createDrink', upload, createDrink);

app.put('/updateDrink/:id', upload, updateDrink);
app.delete('/deleteDrink/:id', deleteDrink);

module.exports = app;
