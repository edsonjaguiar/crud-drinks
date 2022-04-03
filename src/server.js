require('dotenv').config();
require('./config/database');

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');
const path = require('path');

// Middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/thumbnails', express.static(path.resolve('uploads')));

// Routes

app.use('/api', routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
