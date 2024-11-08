let lang = 'Python';
console.log(lang);
console.log(lang [5]);
    console.log(lang[0]);

let numero = 5;
let numeros = [4, 8, 7, 3, 5, 9, 0,]
console.log("vetor", numero);
console.log("segundo elemento",numeros[2]);

numeros[2] = 14;
console.log("ates", numeros);

numeros.push(3);
console.log("depois", numeros);

console.log("posição indefinida", numeros[12]);
console.log("comprimentos", numeros.length);

let last = numeros.length -1 ;
console.log("ultimo", numeros[last]);

const nomes = ["Weslley","Gisele","Mateus","Cristina", "Fred"];
const tamanho = nomes.length;
 
for (let i = 0; i < tamanho; i++) {
    console.log("Bem-Vindo(a)", nomes[i]);

}

console.log("-----------------------------")

for(let nome of nomes); {  //for each
    console.log("Bem-Vindo(a)");
}

console.log("HHHHHHHHHHHHHHHHHH");

const frutas = ["Maçâ", "Laranja", "Abacaxi", "Pera", "Limão", "Morango"];

