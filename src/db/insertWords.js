const WordModel = require('../models/Word');
const AsyncFilter = require('../utils/asyncFilter');

const getJustNewWords = async (words) => {
    const newWords = await AsyncFilter(words, async word => {
        const isWordSaved = await WordModel.exists({ _id: word });
        return !isWordSaved;
    });

    return Array.from(new Set(newWords));
}

const getCummonWords = async (words, lang) => {
    const newWords = await AsyncFilter(words, async word => {
        const isWordSaved = await WordModel.exists({ _id: word, languages: lang });
        return !isWordSaved;
    });

    return Array.from(new Set(newWords));
}

const transformWordToDBWords = (words, language) =>
    words.map(word => {
        return new WordModel({
            _id: word,
            languages: [language]
        });
    });

const insertWords = async (data, language) => {
    console.log(new Date(), "Looking for new words");
    const newWords = await getJustNewWords(data);    

    if (newWords.length == 0)
        return console.log(new Date(), "Not new words to insert!");

    const wordsToInsert = transformWordToDBWords(newWords, language);

    console.log(new Date(), `Starting to insert ${wordsToInsert.length} new words`);
    WordModel.insertMany(wordsToInsert, (err, docs) => {
        if (err) return console.error(err);
        console.log(new Date(), `${docs.length} words were successfully stored.`);
    });

    // const cummonWords = await getCummonWords(data, language);
}

module.exports = {
    insertWords,
    getJustNewWords,
    transformWordToDBWords
};