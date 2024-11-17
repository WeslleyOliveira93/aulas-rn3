console.log("antes")
setTimeout(()=>{
    console.log("atrasado")
}, 2000)
console.log("depois")

let a = 2;
a++;
setTimeout(() => ++a, 1000);

console.log(a);


async function buscarDadosGitHub() {
    const resposta = await axios.get("https://api.github.com/users/WeslleyOliveira93")
    console.log(resposta)
}
buscarDadosGitHub()
