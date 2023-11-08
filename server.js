const express = require('express');
const router = require('../new/routes/incomeRoute');
const Expendrouter = require('../new/routes/expendRoute');

const server = express();

// Instead of using body-parser, you can use express.json() to parse JSON requests
server.use(express.json());

// Use your routers for handling routes
server.use('/addCustomerIncome', router);
server.use('/updateCustomerIncome', router);
server.use('/getCustomerIncomes', router);
server.use('/total', router);

server.use('/addCustomerExpenditure', Expendrouter);
server.use('/updateCustomerExpenditure/:id', Expendrouter);
server.use('/getCustomerExpenditure', Expendrouter);
server.use('/total', Expendrouter);


const port = 5500;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
