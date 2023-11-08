const express = require('express');
const router = express.Router();

const {
  addCustomerExpenditure,
  updateCustomerExpenditure,
  getCustomerExpenditure,
  totalExpenditure,
} = require('../controller/expend.controller');

router.post('/add', addCustomerExpenditure); // POST request to add a customer expenditure
router.put('/update/:id', updateCustomerExpenditure); // PUT request to update a customer expenditure by ID
router.get('/getCustomerExpend', getCustomerExpenditure); // GET request to retrieve all customer expenditures
router.get('/getTotalExpenditure', (req, res) => {
    res.json({totalExpenditure});
});

module.exports = router;
