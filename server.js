const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection");

connectDB();
const app = express();

const dotenv = require("dotenv").config();

const port = process.env.PORT;

app.use(express.json()); //Provides a parser to parse the data stream from client
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server Running on port ${port}`);
})