console.log('start');
let offset = 0

const heading = document.querySelector(".title")
function inc(){
    if(offset >= 10){
        offset += 10
    }else{
        offset ++
    }
    heading.innerHTML = offset
}

function dec(){
    if(offset === 0){
        return 
    }else{
        offset --
    }
    heading.innerHTML = offset
}


// // 1-masala
// function squareSum(numbers){
//     return numbers.reduce((sum, num) => sum + num ** 2, 0);
// }

// // 2-masala
// function findSmallestInt(arr) {
//     return Math.min(...arr);
// }

// // 3-masala
// var summation = function (num) {
//     let sum = 0;
//    for (let i = 1; i <= num; i++) {
//      sum += i;
//    }
//    return sum;
// }
// // 4-masala
// function noSpace(x){
//     return x.replace(/\s+/g,'');
// }
// // 5-masala
// const stringToNumber = function(str){
//     return +str;
//     return null;
// }
// // 6-masala
// function squareDigits(num){
//     return Number(num.toString().split('').map(digit => Math.pow(digit, 2)).join(''));
// }
// // 7-masala
// function greet(language) {
//     const greetings = {
//    english: "Welcome",
//    czech: "Vitejte",
//    danish: "Velkomst",
//    dutch: "Welkom",
//    estonian: "Tere tulemast",
//    finnish: "Tervetuloa",
//    flemish: "Welgekomen",
//    french: "Bienvenue",
//    german: "Willkommen",
//    irish: "Failte",
//    italian: "Benvenuto",
//    latvian: "Gaidits",
//    lithuanian: "Laukiamas",
//    polish: "Witamy",
//    spanish: "Bienvenido",
//    swedish: "Valkommen",
//    welsh: "Croeso"
//  }
//     return greetings[language] || greetings['english'];
// }
// // 8-masala
// function xor(a, b) {
//     return (a || b) && !(a && b);
// }
// // 9-masala
// function move (position, roll) {
//     return position + roll * 2;
// }
// // 10-masala
// function isValid(formula){
//     const set = new Set(formula);
//   if (set.has(1) && set.has(2)) return false;
//   if (set.has(3) && set.has(4)) return false;
//   if ((set.has(5) && !set.has(6)) || (!set.has(5) && set.has(6))) return false;
//   if (!set.has(7) && !set.has(8)) return false;
//   return true;
// }
// // 11-masala
// function removeChar(str){
//     return str.slice(1, -1)
// }
  