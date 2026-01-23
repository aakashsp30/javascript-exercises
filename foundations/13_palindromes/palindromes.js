const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedStr = string.toLowerCase().split('').filter((ch) => alphanumerical.includes(ch)).join('');

    const revStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;