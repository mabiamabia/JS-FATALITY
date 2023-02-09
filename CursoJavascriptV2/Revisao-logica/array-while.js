function generateRandomNumber(max) {
  return parseInt(Math.random() * max);
}

let arr = [];

while (arr.length <= 20) {
  let randomNumber = generateRandomNumber(30);
  console.log(randomNumber);

  if (arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber);
  }
}
console.table(arr);
