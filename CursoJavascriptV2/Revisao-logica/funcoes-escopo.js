let n = "global";

function mostraN() {
  let n1 = "n1 local";

  if (true) {
    var n2 = "dentro de if com let";
  }
  console.log(n2);
  console.log("valor de n: " + n1);
}
mostraN();

console.log("valor de n no escopo global: " + n);

function fnExt() {
  let n = "n local na funcao fxExt";

  function fnInt() {
    let n = "n local na funcao interna";
    console.log(n);
  }
  fnInt();
}

fnExt();
