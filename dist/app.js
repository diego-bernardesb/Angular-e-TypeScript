var message = 'Hello World!';
var num1 = 8;
var num2 = 17;
var num3 = 17;
var total = num1 + num2;
// console.log(message,"hoje é tiveram " + total + " pedidos.");
//função com chamada de operador ternario
var totalPedidos = function (metaDePedidos) {
    return metaDePedidos > 30;
};
var pedidosDoDia = 28;
console.log("A meta de pedidos do dia foi alcan\u00E7ada: ".concat(totalPedidos(pedidosDoDia) ? "Sim" : "Não"));
//Arrow function
var pedido = function (pedido) { return console.log("Gostaria de pedir um ".concat(pedido, ", por favor.")); };
pedido("combo especial");
//parametros padroes
function qtd(lanches, refrigerantes) {
    if (refrigerantes === void 0) { refrigerantes = 0; }
    return lanches + refrigerantes;
}
console.log("O pedido contem 5 lanches e 3 refrigerantes, total de ".concat(qtd(5, 3), " itens."));
console.log("O pedido contem 5 lanches e 0 refrigerantes, total de ".concat(qtd(5), " itens."));
