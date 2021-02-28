require('dotenv').config()
const { connectDB } = require('./db/connectDB');
const { insertWords } = require('./db/insertWords');
const { ENGLISH } = require('./constants/languagesSupported');
const data = require('../data/english/1k_words.json');

const app = async () => {
    await connectDB();
    insertWords(data, ENGLISH);
}

app();