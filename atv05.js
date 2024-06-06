/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que
verificar se o número é par antes de armazenar
no array), no final mostre o Array.
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/
console.clear();
var teclado5 = require("prompt-sync")();
var armazenamentoPar = new Array(5);
for (var i = 0; i <= 5; i++) {
    armazenamentoPar[i] = parseInt(teclado5("Digite um n\u00FAmero par para amarzenar: "));
    if (armazenamentoPar[i] % 2 == 1) {
        console.log("O n\u00FAmero digitado n\u00E3o \u00E9 par!!");
        console.log("Tente outro");
        i--;
    }
    if (armazenamentoPar[i] % 2 == 0) {
        for (var x = 0; x == i; x++) {
            (armazenamentoPar[x]);
        }
    }
}
console.log("Os n\u00FAmeros pares s\u00E3o: ");
for (var z = 0; z <= 5; z++) {
    console.log(armazenamentoPar[z]);
}
