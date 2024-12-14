const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGODB_URL;

const mongoDbConnect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = { mongoDbConnect };
