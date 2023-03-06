// + - * / % **

let n1 = 8;
let n2 = 5;

//operdadores aritmeticos
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(5 ** 2);

//operadores de atribuicao

let n3 = 20;
//n3 = n3 + 15;
n3 += 2;
console.log(n3);

//incremento e decremento

let i = 0;
i++;
console.log(i);

//comparação

/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores doferentes
!== valor e tipo diferentes
*/

console.log(n1, n2, n3);
console.log(n1 === 8);
console.log(n2 <= 4);
console.log(n1 !== 8);

//operadores logicos

/*
Para uma pessoa viajar para o exterior, precisa ser maior de 18 anos
OU 
Acompanhada com os pais
E
Ter os bilhetes
*/

let idade = 12;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

n1 = 6;
n2 = 8;
media = (n1 + n2) / 2;
console.log(media);
console.log(`Media: ${media}`);
console.log(3 * 2 ** 2);
