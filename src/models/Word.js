const mongoose = require("mongoose");

const Word = new mongoose.Schema({
    _id: String,
    languages: []
});
const WordModel = mongoose.model('Word', Word);

module.exports = WordModel;