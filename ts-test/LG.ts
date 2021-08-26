// Typescript 함수 function 함수명():리턴타입{}

function getAdd(): void{
    console.log(2+5);
    // return 2+5;
}
function getSum(x:number, y:number):number{
    return x+y;
}
function getMessage():string{
    const msg: string = '버블티 먹고싶다';
    return msg;
} 
let a: void = getAdd();
// console.log(a);

let b: number = getSum(30, 27);
console.log(b);

let c: string = getMessage();
console.log(c);