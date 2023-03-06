const pessoa = {
  nome: "maria",
  idade: 28,
  email: "ela@server.com",
};
console.table(pessoa);

/* for (let i = 0; i < nomes.length; i++) {
  console.log(`${i}: Nome é ${nomes[i]}`);
}
 */

for (let prop in pessoa) {
  console.table(prop);
  console.warn(pessoa[prop]);
}
