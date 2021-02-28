require('dotenv').config()
const connectDB = require('./db/connectDB');
const insertWords = require('./db/insertWords');
const data = require('../data/english/1k_words.json');
const languagesSupported = require('./constants/languagesSupported');

const app = async () => {
    await connectDB();
    insertWords(data, languagesSupported.ENGLISH);
}

app();