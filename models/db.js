require('./employee');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
mongoose.connect('mongodb+srv://ddad0011:mQF5JhCMHpA5zV@cluster0.edjqgok.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

