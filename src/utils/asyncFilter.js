const AsyncFilter = async (array, predicate) => {
    const result = await Promise.all(array.map(predicate));
    return array.filter((value, index)=>result[index]);
}

module.exports = AsyncFilter;