let condicao = 0;
let numCartas=0;
while(condicao === 0){
    numCartas = prompt("Com Quantas Cartas deseja jogar?");
    if(numCartas%2===0 && numCartas>3 && numCartas<15){
        condicao =1;

    }

}

//alert(`O numero de Cartas é: ${numCartas}`);
//const listaCartas = ["Carta1","Carta2","Carta3","Carta4","Carta5","Carta6","Carta7"];
let cartasDiferentes = numCartas/2;
console.log(cartasDiferentes);
for (let i=0; i<cartasDiferentes; i++){
    let remover = document.querySelector('.cartas').children[i];
    remover.classList.remove('escondido');
}