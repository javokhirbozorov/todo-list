require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//! never forget you get killed otherwise

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3001/tick'],
}));
const mainRoute = require('./src/routes/mainRoute');

const PORT = process.env.PORT || 3002;
app.use('/', mainRoute);

app.listen(PORT);
