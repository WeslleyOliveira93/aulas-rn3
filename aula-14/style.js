
let usuario = "Weslley Oliveira"
let curso = "Full Stack"


function saudacao(nome) {
    console.log(`Olá ${nome}. Bem vindo ao curso ${curso}` );

}
saudacao()

function soma(a, b) {
    console.log(`A soma é ${a + b}`);
}
soma(7, 5);

function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    return media;
}

const mediaAluno = calcularMedia(5, 7, 8);
console.log(`A média do aluno é ${mediaAluno}`);

if (mediaAluno > 7) {
    console.log("Aprovado, parabéns!");
} else {
    console.log("Reprovado, estude mais!");
}


function obterDiaSemana(dia){
    switch (dia){
        case 1 :
            return "Domingo"
        case 2:
            return "Segunda"
        case 3:
            return "terça"
        case 4:
            return "Quarta"
        case 5:
            return "Quinta"
        case 6:
            return "Sexta"
        case 7:
            return "Sabado"
    }
}
console.log(obterDiaSemana(2));

function despedir(nome = "Amigo(a)") {
    console.log(`Até logo ${nome}!`);
}
 despedir()



function calcularAreaCirculo(raio) {
    if (raio == undefined){
        throw new Error ("Rario do circulo nã foi definido");
    }
    return 3.14 * raio ** 2;
}
console.log(calcularAreaCirculo(17));

function subtrair(n1, n2){
    return n1- n2
}



const somar = function(n1, n2){
    return n1 +n2;
}
console.log(subtrair(10, 5));
console.log(somar(10, 5));


//Callback


const numeros = [3, 6, 2,];
numeros.forEach(function(n) {
    console.log(n);
})
//arrow functions

console.log("--------------------------------")

numeros.forEach (n=> console.log(n));

const ola = _ => console.log("Olá!");
ola()

