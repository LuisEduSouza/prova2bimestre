/* Atividade 1 (30 pontos)

Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR,
   o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número
é par ou impar
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/
function funcaoMedia(num1, num2, num3, num4, num5) {
    var media = 0;
    media = (num1 + num2 + num3 + num4 + num5) / 5;
    return media;
}
function funcaoParOuImpar(media) {
    var resultado = "";
    if (media % 2 == 0) {
        resultado = "P";
    }
    if (media % 2 == 1) {
        resultado = "I";
    }
    return resultado;
}
function funcaoMenu() {
    console.clear();
    var teclado = require("prompt-sync")();
    var num1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var num2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    var num3 = parseInt(teclado("Digite o terceiro n\u00FAmero: "));
    var num4 = parseInt(teclado("Digite o quarto n\u00FAmero: "));
    var num5 = parseInt(teclado("Digite o quinto n\u00FAmero: "));
    var media = funcaoMedia(num1, num2, num3, num4, num5);
    var parImpar = funcaoParOuImpar(media);
    console.log("O valor da m\u00E9dia \u00E9 ".concat(media));
    if (parImpar == "P") {
        console.log("A m\u00E9dia \u00E9 par");
    }
    else
        (parImpar == "I");
    {
        console.log("A m\u00E9dia \u00E9 \u00EDmpar");
    }
}
funcaoMenu();
