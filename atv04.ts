/*Atividade 4 (10 pontos)
 Encontre os 5 erros
 - Se inserir erros -2 pontos por erro
 - indique as linhas que estão com problemas no código

Aplicação abaixo recebe 10 números, armazena em um vetor 
e ordene esses 10 números crescente utilizando for
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/

console.clear();
let teclado = require (`prompt-sync`)();  
let numeros = new Array(); 

for (let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));  // Faltava colocar "teclado" depois do parseInt para funcionar o codigo
}

for (let z =0; z <= 9; z++){
    for (let y = z+1; y <= 9; y++){      // O erro na linha era os sinais de -, o certo seria o sinal de +.
        if (numeros[z] > numeros[y]){      // O erro tava na letra z, o correto seria ficar numeros[z] > numeros[y] e não numeros[z] > numeros[z].
            let temporario = numeros[z];
            numeros[z] = numeros[y];    // O erro tava na letra z, o correto seria ficar numeros[z] = numeros[y] e não numeros[z] = numeros[z]
            numeros[y] = temporario;
        }
    }
}

console.log(`O Array em ordem crescente ${numeros}`);
