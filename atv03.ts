/* Atividade 3 (10 pontos)
 Encontre 5 erros na aplicação, se por acaso  o aluno colocar mais erros, 
 perde 2 pontos na nota  por erro.

 - Além de entregar por escrito o código,
 escreva o número da linha que apresenta o problema.

 Aplicação abaixo é uma calculadora que faz uso de função.
Grupo: Enzo Borin, Letícia Diniz, Luis Eduardo, Pedro Alves.
*/

function entrada (): number{
    const teclado = require('prompt-sync')();
    let n: number = parseFloat(teclado(`Digite número: `));   // Nesta linha estava faltando o "parseFloat" antes do teclado
    return n;          // Nesta linha o erro era o número 2, o certo era estar a letra n
}

function soma(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} + ${b} = ${a+b}`);
    menu();
}

function subtracao(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} - ${b} = ${a-b}`);
    menu();
}

function multiplicacao(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} x ${b} = ${a*b}`);
    menu();
}

function divisao(): void{
    console.clear();
    let a: number = entrada();
    let b: number = entrada();
    console.log(`${a} / ${b} = ${a/b}`);
    menu();
}

function sair(): void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);     
}

function opcao (escolha: string): void{
    switch (escolha){
        case `+` : soma(); break;
        case `-` : subtracao(); break;
        case `*` : multiplicacao(); break;
        case `/` : divisao(); break;
        case `@` : sair(); break;
        default: break;
    }
}

function menu (): void{
    const teclado = require('prompt-sync')();            // Nesta linha estava faltando "()" no final da linha
    teclado(`Aperte ENTER para continuar ...`);
    console.clear();
    
    console.log(`-------CALCULADORA--------`);
    console.log(`----Selecione operação----`);
    console.log();
    console.log(`Digite a operação desejada`);
    console.log(`  +    -    *    / `);
    console.log(`Digite @ para sair`);
    console.log();
    let escolha: string  = teclado(`Digite a opção --> `);            // O erro nesta linha era que tinha acrescentado o "parseInt" sem necessidade

    opcao(escolha);
}

menu();              // nesta linha estava faltando a opção "menu();"