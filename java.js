let condicao = 0;
let numCartas=0;
const todasAsCartas =[ 
    'bobrossparrot.gif',
    'bobrossparrot.gif',
    'unicornparrot.gif',
    'unicornparrot.gif',
    'fiestaparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'tripletsparrot.gif',
    'explodyparrot.gif',
    'explodyparrot.gif'
];
while(condicao === 0){
    numCartas = prompt("Com Quantas Cartas deseja jogar?");
    if(numCartas%2===0 && numCartas>3 && numCartas<15){
        condicao =1;
    }
}


let cartasTemporaria=[];

for(let i=0;i<numCartas;i++){
    cartasTemporaria[i]= todasAsCartas[i];
}
cartasTemporaria.sort(comparador);

for(i=0;i<numCartas;i++){
    let ul = document.querySelector(".cartas");
    ul.innerHTML += `
    <li data-test="card" class="card" onclick="clicado(this)">
        <div class="front-face face">
          <img data-test="face-down-image" src="./img/back.png" alt="">
        </div>
        <div class="back-face face">
         <img data-test="face-up-image" src="./img/${cartasTemporaria[i]}" alt="">
        </div>
    </li>
    `;
}
let contadorCliques=0;
let carta1=undefined;
let carta2=undefined;
let contadorJogo=0;
let contadorCartas=0;
function clicado(cartaSelecionada){
    if(contadorCliques===0){
        cartaSelecionada.classList.add('selecionado');
        carta1=cartaSelecionada;
        contadorCliques++;
        contadorCartas++;
    }
    else if(contadorCliques===1){
        cartaSelecionada.classList.add('selecionado');
        carta2=cartaSelecionada;
        contadorCliques++;
        contadorCartas++;

        if(carta1.innerHTML == carta2.innerHTML){
            contadorCliques=0;
            contadorJogo +=2;
            verificarJogo();
        }
        else{
            setTimeout(desvirar, 1000);
        }
    }
}
function verificarJogo(){
    if(contadorJogo == numCartas){
        setTimeout(fim, 350);
    }
}
function fim(){
    alert(`você ganhou em ${contadorCartas} jogadas!`);
}
function desvirar(){
    carta1.classList.remove('selecionado');
    carta2.classList.remove('selecionado');
    contadorCliques=0;
}
function comparador() {
	return Math.random() - 0.5;
}

               