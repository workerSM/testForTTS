// 이 파일은 언어탐지기 만들기 챕터를 위해 만들어졌습니다.

let franc = require('franc');
let langs = require('langs');
let colors = require('colors');
let input = process.argv[2];
//let langCode = franc('Alle menslike wesens word vry');
let langCode = franc(input);
let language = langs.where('3', langCode);

// console.log(franc('Alle menslike wesens word vry'));
console.log(langCode)
if(langCode === 'und'){
    console.log('i dont know'.rainbow)
}else{
    console.log(`this language is ${language.name}`.red)
}