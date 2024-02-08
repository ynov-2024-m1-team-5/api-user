const express = require('express');
const router = express.Router();
const customerRouter = require('./customer.route');

router.use('/customers', customerRouter);

module.exports = router;
