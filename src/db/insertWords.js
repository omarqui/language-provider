const WordModel = require('../models/Word');
const AsyncFilter = require('../utils/asyncFilter');

const insertWords = async (data, language) => {
    console.log(new Date(), "Inicio validacion");
    const newWords = await AsyncFilter(data,async word => {
        const isWordSaved = await WordModel.exists({ _id: word });
        return !isWordSaved;
    });
    
    const wordsList = newWords.map(word => {
        return new WordModel({
            _id: word,
            languages: [language]
        });
    });

    console.log(new Date(), "Inicio insert");
    WordModel.insertMany(wordsList, (err, docs) => {
        if (err) return console.error(err);

        console.log(new Date(),`${docs.length} words were successfully stored.`);
    });
}

module.exports = insertWords;