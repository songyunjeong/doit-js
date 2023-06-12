function calcMultiply(a, b) {
  return a * b;
}

const num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));
const num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));
console.log(`${num1}과 ${num2}를 곱하면 ${calcMultiply(num1, num2)}입니다.`);
