const produto = {
  nome: "caneta",
  qtd: 22,
  comprar: function (n) {
    console.log(this);
    if (n > this.qtd) {
      return "quantidade não disponível";
    }
    this.qtd -= n;
  },
};

produto.comprar(21);
console.warn(produto);
