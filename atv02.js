/* Atividade 2 - (40 pontos)
Crie um programa que tenha 4 funções:

1º Função recebe 3 números e retorna o número maior (10 pontos)
*/
/*2º Função recebe 3 números e retorna o número menor (10 pontos)
*/
/*3º Função recebe o valor maior e o valor menor e retorna
a média desses números (10 pontos)
*/
/*4º Função (principal) deve: (10 pontos)
- receber os três valores digitados
- receber o retorno do valor maior
- receber o retorno do valor menor
- receber a média do valor maior e menor
- exibir o número maior, o número menor e a média
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/
function funcaoMaior(n1, n2, n3) {
    var maior = 0;
    if (n1 > n2 && n1 > n3) {
        maior = n1;
    }
    else if (n2 > n1 && n2 > n3) {
        maior = n2;
    }
    else if (n3 > n1 && n3 > n2) {
        maior = n3;
    }
    return maior;
}
function funcaoMenor(n1, n2, n3) {
    var menor = 0;
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    }
    else if (n2 < n1 && n2 < n3) {
        menor = n2;
    }
    else if (n3 < n1 && n3 < n2) {
        menor = n3;
    }
    return menor;
}
function funcaMedia(n1, n2, n3) {
    var maior = 0;
    var menor = 0;
    var media = 0;
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    }
    else if (n2 < n1 && n2 < n3) {
        menor = n2;
    }
    else if (n3 < n1 && n3 < n2) {
        menor = n3;
    }
    if (n1 > n2 && n1 > n3) {
        maior = n1;
    }
    else if (n2 > n1 && n2 > n3) {
        maior = n2;
    }
    else if (n3 > n1 && n3 > n2) {
        maior = n3;
    }
    media = (maior + menor) / 2;
    return media;
}
function funcaoPrincipal() {
    console.clear();
    var teclado2 = require("prompt-sync")();
    var n1 = parseInt(teclado2("Digite o primeiro n\u00FAmero: "));
    var n2 = parseInt(teclado2("Digite o segundo n\u00FAmero: "));
    var n3 = parseInt(teclado2("Digite o terceiro n\u00FAmero: "));
    console.log("O n\u00FAmero maior \u00E9 ".concat(funcaoMaior(n1, n2, n3)));
    console.log("O n\u00FAmero menor \u00E9 ".concat(funcaoMenor(n1, n2, n3)));
    console.log("A m\u00E9dia do maior com o menor \u00E9 ".concat(funcaMedia(n1, n2, n3)));
}
funcaoPrincipal();
