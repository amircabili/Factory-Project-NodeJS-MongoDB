const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

const employeesRouter = require('./routers/employeesRouter');

const app = express();
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

// routers
app.use('/employees', employeesRouter);

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});
