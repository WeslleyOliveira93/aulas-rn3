let nota = 76; 
let aprovado = true;

if (nota >= 0 && nota <= 100) {
   
    if (nota >= 60) {
        console.log("Aprovado, Parabens!");
    } else {
        console.log("Reprovado, estude mais!");
    }
} else {
    console.log("Nota inválida. Por favor, insira um valor entre 0 e 100.");
}


let idade = 10;

if (idade >= 0 && idade < 12) {
    console.log("Criança");

} else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");

} else if (idade >= 18 && idade <= 64) {
    console.log("Adulto");

} else {
    console.log("Idoso");
}
//3. Crie um programa que recebe um número de 1 a 12 e mostre o nome do mês do ano correspondente (1 para "Janeiro", 2 para "Fevereiro", etc.). Utilize switch para realizar o mapeamento dos números para os meses do ano.

let mes = 6;
switch (mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break
    case 4:
        consoele.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break
    case 8:
        console.log("Setembro");
        break
     case 9:
        console.log("Agosto");
        break
    case 10:
        console.log("Outubro");
        break
    case 11:
        console.log("Novembro");
        break
    case 12:
        console.log("Dezembro");
        break
    
default:
    console.log("Este mês não existe!")
}

//4. Crie uma função que recebe um nome de usuário e uma senha como parâmetros e verifica se eles correspondem a valores predefinidos, como:
//usuario = "admin"
//senha = "12345"
//Se o usuário e a senha estiverem corretos, retorne "Login bem-sucedido".
//Caso contrário, retorne "Usuário ou senha incorretos".
//Use if para validar as informações de login.

let usuariopredefinidos = "admin";
let loginpredefinidos = "1234";
let usuario = "Weslley";

