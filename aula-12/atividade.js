//1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.

let numeros = [12, 21, 3, 55, 56, 78, 45, 83, 24, 35, 24];
let i = 0;
let tamanho = numeros.length;
let soma = 0;

while (i < tamanho) {
    soma += numeros [i];
    i++;
}
console.log("Soma", soma);

//2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.


function contarNumerosPares(vetor) {
    let contadorPares = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            contadorPares++;
        }
    }

    return contadorPares;
}

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26];
console.log("Números Pares:", contarNumerosPares(vetor));


//3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.


{const frutas = ["Maçâ","Uva","Banana","Pera", "Manga", "Melancia", "Jabuticaba"];
const tamanho = frutas.length;
 
for (let i = 0; i < tamanho; i++) {
    console.log("Item:", frutas[i]);

}
}
console.log("__________resp3__________________");

let mercado = ["Maçâ","Uva","Banana","Pera", "Manga", "Melancia", "Jabuticaba"];
for (let item of mercado) {
    console.log("Item:", item);
}

//4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.
{let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
let multi = 2;

let novoVetor = vetor.map(numero => numero * multi);

console.log(novoVetor);
}
console.log("________resp4______________");

{let multiplicador = 3;
let fatores = [5, 3, 7, 9, 12, 4, 9, ]
let resultados = [];
for (let fator of fatores) {
    resultados.push(fator * multiplicador)

} console.log(resultados);
}

5//.  Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. Utilize um loop for para comparar cada valor e encontrar o maior.
console.log("____________resp5___________")
 let nums = [45, 42, 65, 24, 67, 866, 35, 64, 636];
 let maior = 0;
 for (let num of nums) {
    if (maior < num){
        maior = num;
    }
 }
 console.log("Maior", maior);
 