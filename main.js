const _alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const FS = require('fs');
const readline = require('readline-sync');

const _input = process.argv[2];
const _outer = process.argv[3];

let _shift = process.argv[4];
_shift = Number(_shift);

let error = false;

if (isNaN(_shift)) {
    console.log("Invalod type of the shift. You must to write a number");
    error = true;
}


let codeString = FS.readFileSync(_input).toString();
codeString = codeString.toLowerCase();      //make input string to lower case
codeString = codeString.replace(/\s+/g, '');        //delete all spaces

let result = "";

let counter = 0;

if (!error) {       //if input string is error-free
    for (let i = 0; i < codeString.length; i++) {
        let currentSymbol = codeString[i];      //current symbol of input string (symbol with index "i")
        let currentIndexABC = _alphabet.indexOf(currentSymbol);     //index of cuurent symbol in _alphabet
        let currentIndex = currentIndexABC;

        if (currentIndexABC + _shift > _alphabet.length - 1) {     //if current index + _shift is more than _aplhabet length
            for (let j = 0; j < _shift; j++) {
                if (currentIndex + 1 == _alphabet.length) {     //if the next index is more than the next index of _alphabet
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
            }
            result += _alphabet[currentIndex];      //write encoded symbol to result
        } else {
            result += _alphabet[currentIndex + _shift];
        }
    }
}
FS.writeFileSync("out.txt", result);
// console.log(result);