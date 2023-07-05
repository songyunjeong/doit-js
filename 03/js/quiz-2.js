let number = parseInt(prompt('1보다 큰 숫자를 입력하세요.'));
let sum = 0;

if (number !== null && number > 1) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) {
      continue;
    }
    sum += i;
    document.write(`${i} ----- ${sum} <br />`);
  }
}
