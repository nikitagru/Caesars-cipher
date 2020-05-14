const _alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const FS = require('fs');
const readline = require('readline-sync');

const _input = process.argv[1];
const _outer = process.argv[2];

let _shift = process.argv[3];
_shift = Number(_shift);
let error = false;

if (isNaN(_shift)) {
    console.log("Invalod type of shift. You must to write number");
    error = true;
}


let codeString = FS.readFileSync(_input).toString();
codeString = codeString.toLowerCase();      //make input string to lower case

let result = "";

let counter = 0;

if (!error) {       //if input string is error-free
    for (let i = 0; i < codeString.length; i++) {
        let currentSymbol = codeString[i];      //current symbol of input string (symbol with index "i")
        let currentIndexABC = _alphabet.indexOf(currentSymbol);     //index of cuurent symbol in _alphabet
    
        if (currentIndexABC + _shift > _alphabet.length - 1) {     //if current index + _shift is more than _aplhabet length
            for (let j = currentIndexABC; j < _shift; j++) {
                
            }
        }
    }
}
