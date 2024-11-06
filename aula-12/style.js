let contador = 10;
while (contador > 0) {
    console.log(contador);
contador--;
}

let palavra = "Weslley Oliveira";
let posicao = 0;
while (palavra[posicao] != "a") {
    console.log(palavra[posicao]);
    posicao++;
}


let x = 2;
let y = 150;
for (let i = x; i < y; i++) {
      if (i % 7 == 0) {
        console.log(i)
        break
      }
}
for (let i = 0; i < 10; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}



    