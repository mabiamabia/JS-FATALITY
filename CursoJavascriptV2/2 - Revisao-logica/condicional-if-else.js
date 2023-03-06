let idade = 15;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete);
console.log(`Pode viajar: ${podeViajar}`);

n1 = 6;
n2 = 8;
n3 = 27;
media = (n1 + n2) / 2;
console.log(n1, n2, n3);
console.log(`Media: ${media}`);
console.log(3 * 2 ** 2);

let msgMaiorIdade = idade >= 18 ? "é maior de idade" : "é menor de 18 anos";

if (!comprouBilhete) {
  console.log("Não comprou o bilhete");
} else {
  console.log(msgMaiorIdade);
}

if (n1 === 0 || n2 === 0) {
  console.log("Reprovado");
} else if (media < 7) {
  console.log("reprovado, mas ha como recuperar");
} else {
  console.log("parabens, aprovade");
}

console.log("saiu do bloco if");
