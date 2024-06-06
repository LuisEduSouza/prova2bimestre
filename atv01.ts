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


function funcaoMedia(num1:number,num2:number,num3:number,num4:number,num5:number):number{
    let media: number = 0;
    media = (num1+num2+num3+num4+num5) / 5;
    return media;
}

function funcaoParOuImpar(media):string{
    let resultado: string = ``;
    if(media % 2 == 0){
        resultado = `P`;
    } 
    if(media % 2 == 1){
        resultado = `I`;
    } 
    return resultado;
}

function funcaoMenu(): void{

    console.clear();
    const teclado = require (`prompt-sync`)();

    let num1: number = parseInt(teclado(`Digite o primeiro número: `));
    let num2: number = parseInt(teclado(`Digite o segundo número: `));
    let num3: number = parseInt(teclado(`Digite o terceiro número: `));
    let num4: number = parseInt(teclado(`Digite o quarto número: `));
    let num5: number = parseInt(teclado(`Digite o quinto número: `));

    let media: number = funcaoMedia(num1,num2,num3,num4,num5);
    let parImpar: string = funcaoParOuImpar(media);

    console.log(`O valor da média é ${media}`);
    if(parImpar == `P`){
        console.log(`A média é par`);
    }
    else(parImpar == `I`);{
        console.log(`A média é ímpar`);
    }
}

funcaoMenu();

