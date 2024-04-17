const express=require("express")
const app=express();

require("dotenv").config();
const PORT =  3000;

// adding middleware
app.use(express.json());

// mount 
// const blog=require("./route/blog")
// app.use("/api/v1",blog);

const dummyRoute=require("./route/dummyRoute");
app.use("/api/v1",dummyRoute);

const blog=require("./route/blog");
app.use("/api/v1",blog)

const connectWithDb = require("./config/database");
connectWithDb();

// start the server
app.listen(PORT,() => {
    console.log(`Server Started successfully at ${PORT}`);
})

app.get("/",(req,res) => {
    res.send("<h1>This is my homepage</h1>")
})
