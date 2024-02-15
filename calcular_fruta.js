function calcularCusto() {
    var quantidade = document.getElementById("quantidade").value;
    var precoMenosDeDoze = 1.30;
    var precoDozeOuMais = 1.00;
    var totalDaCompra;

    if (quantidade < 12) {
        totalDaCompra = quantidade * precoMenosDeDoze;
    } else {
        totalDaCompra = quantidade * precoDozeOuMais;
    }

    console.log("Quantidade de maçãs: " + quantidade);
    console.log("Custo total da compra: R$ " + totalDaCompra.toFixed(2));

    
    document.write("Quantidade de maçãs: " + quantidade + "<br>");
    document.write("Custo total da compra: R$ " + totalDaCompra.toFixed(2));
}
