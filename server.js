const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://svariumfoo:tomate@cluster0.y3xmhlq.mongodb.net/", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("DB CONNECTED!!!");
})

app.use("/api/user", userRoutes)

app.listen(5000, console.log("Server started"));