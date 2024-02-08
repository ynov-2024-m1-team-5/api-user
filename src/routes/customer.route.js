const express = require('express');
const router = express.Router();
const { getCustomers, getCustomer, updateCustomer, deleteCustomer, saveCustomer } = require('../controllers/customer.controller');

router.get('/', getCustomers);
router.post('/save', saveCustomer);
router.get('/:id', getCustomer);
router.post('/:id/update', updateCustomer);
router.get('/:id/delete', deleteCustomer);


module.exports = router;
