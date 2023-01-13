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
console.log(todasAsCartas);
console.log(todasAsCartas.length);

let cartasTemporaria=[];

for(let i=0;i<numCartas;i++){
    cartasTemporaria[i]= todasAsCartas[i];
}
console.log(cartasTemporaria);
console.log(cartasTemporaria.length);

/*
let listaCartas=[];
for (let i=0; i<numCartas; i++){
    let remover = document.querySelector('.cartas').children[i];
    console.log(remover);
    
    remover.classList.remove('escondido');
    listaCartas.push(remover);

}*/

cartasTemporaria.sort(comparador);
console.log("girou");
console.log(cartasTemporaria);
console.log(cartasTemporaria.length);

let ul = document.querySelector(".cartas");
console.log(ul);



for(i=0;i<numCartas;i++){
    let ul = document.querySelector(".cartas");
    ul.innerHTML += `
    <li class="card"> 
        <div class="front-face face">
          <img  src="./img/back.png" alt="">
        </div>
        <div class="back-face face">
         <img  src="./img/${cartasTemporaria[i]}" alt="">
        </div>
    </li> 
    `;
}
console.log(ul);

function comparador() { 
	return Math.random() - 0.5; 
}

/*              <li class="card"> 
                    <div class="front-face face">
                        <img  src="./img/back.png" alt="">
                    </div>
                    <div class="back-face face">
                        <img  src="./img/bobrossparrot.gif" alt="">
                    </div>
                </li>
                */
               