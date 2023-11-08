const express = require('express');
const router = express.Router();

const {
  addCustomerIncome,
  updateCustomerIncome,
  getCustomerIncomes,
  totalIncome
} = require('../controller/income.controller'); 

router.post('/customerIncomes', addCustomerIncome); // POST request to add a customer income
router.put('/customerIncomes/:id', updateCustomerIncome); // PUT request to update a customer income by ID
router.get('/', getCustomerIncomes); // GET request to retrieve all customer incomes
router.get('/getTotalIncome', (req, res) => { res.json({totalIncome});});


module.exports = router;
