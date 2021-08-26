// Typescript 함수 function 함수명():리턴타입{}
function getAdd() {
    console.log(2 + 5);
    // return 2+5;
}
function getSum(x, y) {
    return x + y;
}
function getMessage() {
    var msg = '버블티 먹고싶다';
    return msg;
}
var a = getAdd();
// console.log(a);
var b = getSum(30, 27);
console.log(b);
var c = getMessage();
console.log(c);
