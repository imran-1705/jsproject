const mongoose = require('mongoose');
const { type } = require('os');

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
});

mongoose.model("emps", empSchema);

module.exports = Empmodel;
