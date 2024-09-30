function sumDigits(num) {
let digits = Math.abs(num).toString().split("");
let sum = digits.reduce((acu, cur)=> acu + parseInt(cur) , 0 );
return sum;
}

console.log(sumDigits(-35));