const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/customerDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Customer Details Schema
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Customer = mongoose.model('Customer', customerSchema);

// Route to handle customer details submission
app.post('/submit-customer-details', (req, res) => {
    const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newCustomer.save((err) => {
        if (err) {
            res.status(500).send('Error saving customer details');
        } else {
            res.status(200).send({ message: 'Details submitted successfully' });
        }
    });
});

// Server listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
