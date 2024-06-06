/*Atividade 4 (10 pontos)
 Encontre os 5 erros
 - Se inserir erros -2 pontos por erro
 - indique as linhas que estão com problemas no código

Aplicação abaixo recebe 10 números, armazena em um vetor
e ordene esses 10 números crescente utilizando for
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/
console.clear();
var teclado = require("prompt-sync")();
var numeros = new Array();
for (var x = 0; x <= 9; x++) {
    numeros[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, " do Array: "))); // Faltava colocar "teclado" depois do parseInt para funcionar o codigo
}
for (var z = 0; z <= 9; z++) {
    for (var y = z + 1; y <= 9; y++) { // O erro na linha era os sinais de -, o certo seria o sinal de +.
        if (numeros[z] > numeros[y]) { // O erro tava na letra z, o correto seria ficar numeros[z] > numeros[y] e não numeros[z] > numeros[z].
            var temporario = numeros[z];
            numeros[z] = numeros[y]; // O erro tava na letra z, o correto seria ficar numeros[z] = numeros[y] e não numeros[z] = numeros[z]
            numeros[y] = temporario;
        }
    }
}
console.log("O Array em ordem crescente ".concat(numeros));
