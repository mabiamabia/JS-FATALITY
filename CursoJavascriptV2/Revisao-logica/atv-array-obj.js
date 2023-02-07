const pessoas = [
  {
    nome: "Daniel",
    idade: 40,
  },
  {
    nome: "epdrl",
    idade: 23,
  },
  {
    nome: "Denise",
    idade: 13,
  },
];

let i = 0;

while (i < pessoas.length) {
  console.table("o nome do funcionario é: " + pessoas[i].nome);
  console.table("a idade do funcionario é : " + pessoas[i].idade);
  i++;
}
