"use strict";
// Using typeof
Object.defineProperty(exports, "__esModule", { value: true });
exports.screen = void 0;
var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
exports.screen = document.querySelector('.screen');
//function addNumbers(a,b) {
//    if(typeof a === "number" && typeof b === "number"){
//        screen.innerHTML = a + b
//   } else{
//      screen.innerHTML = parseInt(a) + parseInt(b);
// }
// 
//}
function addNumbers(a, b) {
    exports.screen.innerHTML = String(a) + String(b);
    alert("function is working");
}
button.addEventListener('click', function () { return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)); });
