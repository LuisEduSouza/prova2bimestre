/* Atividade 3 (10 pontos)
 Encontre 5 erros na aplicação, se por acaso  o aluno colocar mais erros,
 perde 2 pontos na nota  por erro.

 - Além de entregar por escrito o código,
 escreva o número da linha que apresenta o problema.

 Aplicação abaixo é uma calculadora que faz uso de função.
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/
function entrada() {
    var teclado = require('prompt-sync')();
    var n = parseFloat(teclado("Digite n\u00FAmero: ")); // Nesta linha estava faltando o "parseFloat" antes do teclado
    return n; // Nesta linha o erro era o número 2, o certo era estar a letra n
}
function soma() {
    console.clear();
    var a = entrada();
    var b = entrada();
    console.log("".concat(a, " + ").concat(b, " = ").concat(a + b));
    menu();
}
function subtracao() {
    console.clear();
    var a = entrada();
    var b = entrada();
    console.log("".concat(a, " - ").concat(b, " = ").concat(a - b));
    menu();
}
function multiplicacao() {
    console.clear();
    var a = entrada();
    var b = entrada();
    console.log("".concat(a, " x ").concat(b, " = ").concat(a * b));
    menu();
}
function divisao() {
    console.clear();
    var a = entrada();
    var b = entrada();
    console.log("".concat(a, " / ").concat(b, " = ").concat(a / b));
    menu();
}
function sair() {
    console.clear();
    console.log("Fim de programa...");
    process.exit(0);
}
function opcao(escolha) {
    switch (escolha) {
        case "+":
            soma();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisao();
            break;
        case "@":
            sair();
            break;
        default: break;
    }
}
function menu() {
    var teclado = require('prompt-sync')(); // Nesta linha estava faltando "()" no final da linha
    teclado("Aperte ENTER para continuar ...");
    console.clear();
    console.log("-------CALCULADORA--------");
    console.log("----Selecione opera\u00E7\u00E3o----");
    console.log();
    console.log("Digite a opera\u00E7\u00E3o desejada");
    console.log("  +    -    *    / ");
    console.log("Digite @ para sair");
    console.log();
    var escolha = teclado("Digite a op\u00E7\u00E3o --> "); // O erro nesta linha era que tinha acrescentado o "parseInt" sem necessidade
    opcao(escolha);
}
menu(); // nesta linha estava faltando a opção "menu();"
