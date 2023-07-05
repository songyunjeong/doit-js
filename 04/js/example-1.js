// 방법(1)
/*
function multiple(a, b) {
  return a * b;
}

console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);
*/

// 방법(2)
function multiple(a, b) {
  return a * b;
}

let number = prompt('두 수를 입력하세요.', '2 13');
number = number.split(' ');

number[0] = Number(number[0]);
number[1] = Number(number[1]);
console.log(typeof number[0], typeof number[1]);

console.log(`두 수를 곱한 결과는 ${multiple(number[0], number[1])}입니다.`);
