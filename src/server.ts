import 'reflect-metadata';
import './database';
import routes from './routes/index';
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
const port = 3333;

app.use(cors())
app.use(bodyParser.json());
app.use(routes);
app.listen(port, () => console.log(`Running on port ${port}`));