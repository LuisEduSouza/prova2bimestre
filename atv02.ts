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
function funcaoMaior (n1:number,n2:number,n3:number): number{
    let maior: number = 0;
    if (n1 > n2 && n1 > n3){
        maior = n1;
    }
    else if (n2 > n1 && n2 > n3){
        maior = n2;
    }
    else if (n3 > n1 && n3 > n2){
        maior = n3;
    }
    return maior;
}

function funcaoMenor (n1:number,n2:number,n3:number):number{
    let menor: number = 0;
    if (n1 < n2 && n1 < n3){
        menor = n1;
    }
    else if (n2 < n1 && n2 < n3){
        menor = n2;
    }
    else if (n3 < n1 && n3 < n2){
        menor = n3;
    }
    return menor;
}

function funcaMedia(n1:number,n2:number,n3:number):number{
    let maior: number = 0;
    let menor: number = 0;
    let media: number = 0;
    if (n1 < n2 && n1 < n3){
        menor = n1;
    }
    else if (n2 < n1 && n2 < n3){
        menor = n2;
    }
    else if (n3 < n1 && n3 < n2){
        menor = n3;
    }
    if (n1 > n2 && n1 > n3){
        maior = n1;
    }
    else if (n2 > n1 && n2 > n3){
        maior = n2;
    }
    else if (n3 > n1 && n3 > n2){
        maior = n3;
    }
    media = (maior + menor) / 2 ;
    return media;
}

function funcaoPrincipal(): void{
    console.clear();
    const teclado2 = require (`prompt-sync`)();

    let n1: number = parseInt(teclado2(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado2(`Digite o segundo número: `));
    let n3: number = parseInt(teclado2(`Digite o terceiro número: `));
    console.log(`O número maior é ${funcaoMaior(n1,n2,n3)}`);
    console.log(`O número menor é ${funcaoMenor(n1,n2,n3)}`);
    console.log(`A média do maior com o menor é ${funcaMedia(n1,n2,n3)}`);
}

funcaoPrincipal();
