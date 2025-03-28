function longestSubstring(str1, str2) {
    let maxLength = 0;
    let longestSub = "";
    
    for (let i = 0; i < str1.length; i++) {
        for (let j = i; j < str1.length; j++) {
            let subStr = str1.substring(i, j + 1);
            if (str2.includes(subStr) && subStr.length > maxLength) {
                maxLength = subStr.length;
                longestSub = subStr;
            }
        }
    }
    
    return longestSub;
}

console.log(longestSubstring("abcdef", "bcdeft")); // "bcde"
