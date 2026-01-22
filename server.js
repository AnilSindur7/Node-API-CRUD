const express = require("express");
const mongoose = require("mongoose");
const app = express();
const empRouter = require("./routes/emp.route");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/emp", empRouter);

app.get("/", (req, res)=>{
    res.send("Hi, This is simple crup backend app");
})


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("database connected");
    app.listen(3000,()=>{
        console.log("server is running on port no 3000");
    });
})
.catch((error)=>{
    console.log("Connection failed", error);
})