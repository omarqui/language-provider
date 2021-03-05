require('dotenv').config()
const { connectDB } = require('./db/connectDB');
const { insertWords } = require('./db/insertWords');
const { ENGLISH, SPANISH, FRENCH } = require('./constants/languagesSupported');
const dataEnglish = require('../data/english/20k_words_2.json');
const dataSpanish = require('../data/spanish/1k_words.json');
const dataFrance = require('../data/france/1k_words.json');

const app = async () => {
    await connectDB();
    insertWords(dataEnglish, ENGLISH);
}

app();