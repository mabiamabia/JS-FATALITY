const somar = function s() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 6, 74, 45, 454));
