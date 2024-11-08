let idade = 15; 
let autorizacaoPais = true;
if (idade >= 18 || autorizacaoPais) {
console.log ("Pode Viajar!")
} else { 
    console.log("Não pode viajar!");
}

let clima = "SOL";
if( clima == "SOL") {
    console.log ("Hoje vou a praia");} 
    else{
    console.log("Hoje vou dormir");}
let num = 55;
console.log ((num % 2 == 0) ? "Par" : "Impar");
let dia = 8;
switch (dia){
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("Segunda Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break
    case 4:
        consoele.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sabado");
default:
    console.log("Este dia não existe!")
}

let a = 17, b = 50, c = 22;

let maior = Math.max(a, b, c);
console.log("O maior valor é:", maior);


//1. Crie um programa que receba uma nota de um aluno (de 0 a 100) e mostre:
//"Aprovado" se a nota for maior ou igual a 60.
//"Reprovado" se a nota for menor que 60.

