const pessoa = {
    nome: "Weslley Oliveira",
    idade: 31,
    cumprimentar: function () {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}
console.log(pessoa)
pessoa.cumprimentar()

//funções construtores

function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;

}
const pessoa2 = new Pessoa("Weslley", 31);
console.log(pessoa2)

const pessoa3 ={
    nome: "Estafane" , 
    enderec: {
        rua: "Rua aqui perto",
        UF:"Rj",
        }
};

const { nome, enderec : {rua, UF}} = pessoa3;
console.log(nome);
console.log(rua);
console.log(UF);



const nomes = ["Rodrigo", "Weslley", "Gisele", "Mateus"]
const [primeiro, segundo, terceiro] = nomes;  //desistruturação de vetor
console.log(primeiro);

const tarefas = [
    {desc: "Estudar JavaScript"},
    {desc: "academia"},
    {desc: "sair de casa"},
];
const [p, {desc}] = tarefas

console.log (desc)