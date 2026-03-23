const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./routes/usreroutes');

app.use("/api/students", userRoutes);

const port = 4500;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});