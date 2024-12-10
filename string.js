function anagram(str1,str2){

    function normalise(str){
        str=str.toLowerCase().split('').sort().join('')
        console.log(str);
        
        return str
    }

    return normalise(str1)===normalise(str2)
}

console.log(anagram("sileNt","Listen"));
console.log(anagram("sileNt","LisenY"));

// function isAnagram(str1, str2) {
//     let normalize = str => str.toLowerCase().split('').sort().join('');
//     return normalize(str1) === normalize(str2);
// }
// console.log(isAnagram("listen", "silent")); // true



// longest word in a string

function longestWord(str){
    let word=str.split(" ")
    let longest=word.reduce((a,b)=>a.length>b.length?a:b)
    return longest
}
console.log(longestWord("sdhgfhd jkadghdjaghjdfg hgjhg ghadvfgd"));
