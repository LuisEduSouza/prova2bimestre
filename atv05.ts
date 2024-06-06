/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que 
verificar se o número é par antes de armazenar 
no array), no final mostre o Array. 
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/

console.clear();
const teclado5 = require(`prompt-sync`)();

let armazenamentoPar: number [] = new Array(5);

for(let i = 0; i <= 5; i++){
    armazenamentoPar[i] = parseInt(teclado5(`Digite um número par para amarzenar: `));
    if( armazenamentoPar[i] % 2 == 1){
        console.log(`O número digitado não é par!!`);
        console.log(`Tente outro`);
        i--;
    }
    if(armazenamentoPar[i] % 2 == 0){
        for( let x = 0; x == i; x++){
            (armazenamentoPar[x]);
        }
    }
}

console.log(`Os números pares são: `);
for (let z = 0; z <= 5; z++){
    console.log(armazenamentoPar[z]);
}