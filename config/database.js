const mongoose=require("mongoose")

require("dotenv").config();

const connectWithDb = (req,res) => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connection Successful"))
    .catch((err) => {
        console.log("Issue in DB Connection");
        console.log(err);
        process.exit(1);
    })
};

module.exports = connectWithDb;

