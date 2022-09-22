const express = require('express');

const usersRouters = require('./users.router');
const buyersRouters = require('./buyers.router');
const booksRouters = require('./books.router');
const salespointsRouters = require('./salespoints.router');

function routerApi(app){
    const router = express.Router();
    app.use("", router);
    router.use('/users', usersRouters);
    router.use('/buyers', buyersRouters);
    router.use('/books', booksRouters);
    router.use('/salespoints', salespointsRouters);
};

module.exports = routerApi;