const linguagem = "JavaScript";
console.log(linguagem[0]);

for(let letra of linguagem) {
console.log(letra)

}
console.log(linguagem);
console.log(linguagem.toLowerCase());
console.log(linguagem.toUpperCase());
console.log(linguagem.endsWith("Script"));
console.log(linguagem.startsWith("Java"));
console.log(linguagem.includes("Type"));
console.log(linguagem.indexOf("a"));
console.log(linguagem.lastIndexOf("a"));
console.log(linguagem.replace("Java", "Type"));
console.log(linguagem)
console.log(linguagem.slice(2, 7));

const nome ="Weslley Oliveira";
const curso = "Dev Full";

console.log("Bem Vindo", nome, "ao Curso", curso);
console.log(`Bem Vindo ${nome} ao curso ${curso}`);

const num1 = 45;
const num2 = 15;
console.log(`Soma de ${num1} é ${num2} igual a ${num1+num2}`);