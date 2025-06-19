let corCliente = 'azul';
let corEstoque = 'vermelho';
let corVendida = corCliente || corEstoque;

console.log(corVendida); // Saída: azul
-----------------------------------------------------------
let velocidade = 80; 

if (velocidade > 110) {
    console.log('Você foi multado!');
}

else if (velocidade > 60 && velocidade <= 110) {
    console.log('Você está dentro do limite de velocidade.');
}

else
{
    console.log('Você está abaixo do limite de velocidade.');
} 
--------------------------------------------------------------
let airport = 'GRU';
switch (airport) {
    case 'GRU':
        console.log('Aeroporto de Guarulhos');
        break;
    case 'CGH':
        console.log('Aeroporto de Congonhas');
        break;
    case 'BSB':
        console.log('Aeroporto de Brasília');
        break;
    default:
        console.log('Aeroporto desconhecido');
}
======================================================
let veiculo = 'carro'

function verificarVeiculo(veiculo) {
    switch (veiculo) {
        case 'carro':
            console.log('Você está dirigindo um carro.');
            break;
        case 'moto':
            console.log('Você está dirigindo uma moto.');
            break;
        case 'jetski':
            console.log('Você está dirigindo um jetski.');
            break;      
        }
    }
verificarVeiculo(veiculo)
-------------------------------------------------
for (i = 1; i <= 10; i++) {
    console.log('numero' , i)
}
-------------------------------------------------
function tabuada(numero){
    for (i = 1; i<= 10; i++){
        console.log(numero * i)
    }
}
n = 1
tabuada(n)
n2 = 4
tabuada(n2)
---------------------------------------------------
i = 1

while (i <= 10){
    console.log('numero', i)
}
----------------------------------------------------
i = 1
do {
    console.log('Numero', i)
    i++
} while (i <= 10)
-----------------------------------------------------
for in lopp
const meuCarro = {
    model: 'BMW'
    ano: '2024'
    km: '27985'
}

for (let cu in meuCarro)
    console.log(cu, meuCarro[cu])
-------------------------------------------------------
