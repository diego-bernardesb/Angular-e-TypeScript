let message:String = 'Hello World!';

let num1: number = 8;
let num2: number = 17;
let num3: number = 17;


let total: number = num1 + num2;

// console.log(message,"hoje é tiveram " + total + " pedidos.");

//função com chamada de operador ternario
let totalPedidos = function(metaDePedidos: number):boolean{
    return metaDePedidos > 30;
}

let pedidosDoDia: number = 28;
console.log(`A meta de pedidos do dia foi alcançada: ${totalPedidos(pedidosDoDia)? "Sim": "Não"}`)

//Arrow function
let pedido = (pedido: string) => console.log(`Gostaria de pedir um ${pedido}, por favor.`)
pedido("combo especial")


//parametros padroes
function qtd(lanches: number, refrigerantes: number = 0) :number{
    return lanches + refrigerantes;
}

console.log(`O pedido contem 5 lanches e 3 refrigerantes, total de ${qtd(5, 3)} itens.`)
console.log(`O pedido contem 5 lanches e 0 refrigerantes, total de ${qtd(5)} itens.`)