import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import expensesRoutes from './routes/expenses.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/expenses', expensesRoutes);

// const CONNECTION_URL = 'mongodb://localhost:27017/inspecsan?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const CONNECTION_URL = 'mongodb://admin:Mregg%25a%3FPsLm6xBqG3MC%2B7n3@localhost:27017/inspeksan?authSource=admin&authMechanism=SCRAM-SHA-256&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));