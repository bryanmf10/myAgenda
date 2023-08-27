import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
    title: String,
    price: Number,
})

var Expense = mongoose.model('Expense', expenseSchema);

export default Expense;