// 10. How do you print the first non-repeated character from a string?

const string = ["alcibiadecucotz"];

for (i = 0; i < string.length; i++) {

    if (string.indexOf(string.charAt[i]) == string.lastIndexOf(string.charAt[i])) {
        console.log(string.charAt[i]);
    }
}