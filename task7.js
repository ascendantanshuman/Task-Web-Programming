function reverseString(str) {
    return str.split("").reverse().join("");
}

function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    return str.split("").filter(char => vowels.includes(char)).length;
}

console.log(reverseString("hello")); // "olleh"
console.log(capitalizeWords("this is a test")); // "This Is A Test"
console.log(countVowels("hello world")); // 3
