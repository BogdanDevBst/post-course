// 08. How do you print duplicate characters from a string?

const findDuplicates = (text) => {
    const stringArr = text.split("");
    const uniqueKeyStore = new Map();
    const output = [];

    stringArr.forEach((character) => {
        if (uniqueKeyStore.get(character) && !output.includes(character)) {
            output.push(character);
        } else {
            uniqueKeyStore.set(character, character);
        }
    });

    return output;
};

console.log(findDuplicates('abbacpatiandreiabogdanc'));
