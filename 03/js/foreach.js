const students = ["Park", "Kim", "Lee", "Kang"];

students.forEach(function (student) {
  document.write(`${student}. `);
});

// 화살표 함수를 사용한다면
// students.forEach(student => document.write(`${student}. `));

// 1분 복습하기
const fruits = ["apple", "banana", "cherry", "grape", "orange"];
fruits.forEach(function (fruit) {
  document.write(`${fruit}, `);
});
