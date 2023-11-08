const customerIncomes = [];

// Add a customer income
exports.addCustomerIncome = (req, res) => {
    const { name, income } = req.body;

    if (!name || !income) {
        return res.status(400).json({ message: "Name and income are required" });
    }

    const id = customerIncomes.length + 1;
    const newIncome = { id, name, income };
    customerIncomes.push(newIncome);
    res.json({ message: "Added successfully" });
};

// Update a customer income by ID
exports.updateCustomerIncome = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, income } = req.body;

    if (!name || !income) {
        return res.json({ message: "Name and income are required" });
    }

    const existingIncome = customerIncomes.find((income) => income.id === id);

    if (existingIncome) {
        existingIncome.name = name;
        existingIncome.income = income;
        res.json({ message: "Updated successfully" });
    } else {
        res.json({ message: "Income not found." });
    }
};

exports. totalIncome = customerIncomes.reduce((sum, income) => sum + income.income, 0);

// Get all customer incomes
exports.getCustomerIncomes = (req, res) => {
    res.json(customerIncomes);
};
