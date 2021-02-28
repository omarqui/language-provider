const mongoose = require("mongoose");
const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_SERVER,
    MONGO_DB
} = process.env;

const dbString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_SERVER}/${MONGO_DB}?retryWrites=true&w=majority`;

const connectDB = async () => {
    await mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.info("DB connected!");
    }).catch(error => {
        console.error(error);
    });
}

module.exports = connectDB;