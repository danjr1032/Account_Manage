const customerExpenditure = [];

exports.addCustomerExpenditure = (req, res) => {
    const { name, income } = req.body;
    const id = customerExpenditure.length + 1; // Increment the ID based on the array length
    const newExpenditure = { id, name, income };
    customerExpenditure.push(newExpenditure);
    res.json({ message: "Added successfully" });
};

exports.updateCustomerExpenditure = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, income } = req.body;

    const existingExpenditure = customerExpenditure.find((expenditure) => expenditure.id === id);

    if (existingExpenditure) {
        existingExpenditure.name = name;
        existingExpenditure.income = income;
        res.json({ message: "Updated successfully" });
    } else {
        res.json({ message: "Expenditure not found." });
    }
};

exports.totalExpenditure = customerExpenditure.reduce((sum, expenditure) => sum + expenditure.expenditure, 0);

exports.getCustomerExpenditure = (req, res) => {
    res.json(customerExpenditure);
};
