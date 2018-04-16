const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors')

const UserController = require('./user/UserController');
const SubscriptionController = require('./subscription/SubscriptionController');
const SendController = require('./send/SendController');

app.use(cors());

app.use('/users', UserController);

app.use('/subscriptions', SubscriptionController);

app.use('/send', SendController);

module.exports = app;