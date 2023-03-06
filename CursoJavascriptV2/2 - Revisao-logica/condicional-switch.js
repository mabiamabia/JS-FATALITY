let diaSemana = 0;

if (diaSemana === 0) {
  console.log("hoje é domingo");
} else if (diaSemana === 1) {
  console.log("segunda-feira");
} else if (diaSemana === 2) {
  console.log("terça-feira");
} else if (diaSemana === 3) {
  console.log("quarta-feira");
} else if (diaSemana === 4) {
  console.log("quinta-feira");
} else if (diaSemana === 5) {
  console.log("sexta-feira");
} else {
  console.log("sabado");
}

let dia = "";
switch (diaSemana) {
  case 0:
    dia = "segunda";
    break;
  case 1:
    dia = "terça";
    break;
  case 2:
    dia = "quarta";
    break;
  case 3:
    dia = "quinta";
    break;
  case 4:
    dia = "sexta";
    break;
  default:
    " -- ";
}
console.log(`hj é ${dia}`);
