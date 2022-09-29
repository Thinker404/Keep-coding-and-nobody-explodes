var seq1 = ['s1','s3','s4','s2','s5'];
var seq2 = ['s5', 's5','s2', 's4', 's3'];

    
    
//Relógio da bomba
function relogio() {
if(condiçãoDeJogo == true){

    if(min == 00 && sec == 00){
        alert("You lose!");
        condiçãoDeJogo = false;
        return;
    }

    if(sec <= 10 && sec>0){
        sec = sec - 1;
        document.getElementById('sec').innerText = `0${sec}`;
        return
    }

    if(sec >= 11){
        sec = sec - 1;
        document.getElementById('sec').innerText = sec;
        return
    }

    if(min > 0 && sec == 0){
        min = min-1
        document.getElementById('min').innerText = `0${min}`;
        sec = 59    
        document.getElementById('sec').innerText = sec;
        return
    }

    if(min == 0){
        sec = sec - 1
        document.getElementById('min').innerHTML = `0${min}`;
        document.getElementById('sec').innerText = sec;
        return
    }
}



}


const MOD1 = document.getElementById('mod_1');
const MOD2 = document.getElementById('mod_2');
const MOD3 = document.getElementById('mod_3');
const MOD4 = document.getElementById('mod_4');
const canvas1 = MOD1.getContext('2d');
const canvas2 = MOD2.getContext('2d');
const canvas3 = MOD3.getContext('2d');
const canvas4 = MOD4.getContext('2d');


var base_image1 = new Image();
var base_image2 = new Image();
var base_image3 = new Image();
var base_image4 = new Image();

// var img = new Image();
// window.onload = function (){


// img.onload = function (e)
//     {
//         canvas1.drawImage(img, 0, 0);
//     }
//     img.src = '/media/simbolos/s1.png';
// }


MOD1.width = 300
MOD1.height = MOD1.width;

MOD2.width = 300
MOD2.height = MOD2.width;

MOD3.width = 300
MOD3.height = MOD3.width;

MOD4.width = 300
MOD4.height = MOD4.width;

let min = 06;
let sec = 00;

let condiçãoDeJogo = true;


//ANIMATION:

function pisca_verde_animation(quadro){
    let x=20;
    let y=20;
    let radius=10;
    quadro.beginPath();
    quadro.fillStyle='#00FF00';
    quadro.arc(x,y,radius,0,Math.PI*2);
    quadro.fill();
    

}
function pisca_cinza_animation(quadro){
    let x=20;
    let y=20;
    let radius=10;
    quadro.beginPath();
    quadro.fillStyle='#808080';
    quadro.arc(x,y,radius,0,Math.PI*2);
    quadro.fill();

}

//CALLING

var fps_pisca = 1;
var t = 0;

function pisca_call(timestamp){
    setTimeout(function(){ //requestAnimationFrame to 20fps

        if(t == 0){
            pisca_verde_animation(canvas1)
            pisca_verde_animation(canvas2)
            pisca_verde_animation(canvas3)
            pisca_verde_animation(canvas4)
            t = 1;
        }else{
            pisca_cinza_animation(canvas1)
            pisca_cinza_animation(canvas2)
            pisca_cinza_animation(canvas3)
            pisca_cinza_animation(canvas4)
            t = 0;
        }
        requestAnimationFrame(pisca_call)
        
    }, 1000/fps_pisca)
}
requestAnimationFrame(pisca_call);

// ------------ END-ANIMATION --------------


//Módulo 1 - Sequência certa

// var base_image = new Image();
// base_image.src = './media/simbolos/s3.png';
// canvas1.drawImage(base_image);

var valido = 1
function mod1(canvas1){
    criarQuadrado(canvas1, 35,40,110,110);
    colocarImagem(1, canvas1);
    aleatorio(1);

    criarQuadrado(canvas1, 35,160,110,110);
    colocarImagem(2, canvas1);
    aleatorio(2);

    criarQuadrado(canvas1, 160,40,110,110);
    colocarImagem(3, canvas1);
    aleatorio(3);

    criarQuadrado(canvas1, 160,160,110,110);
    colocarImagem(4, canvas1);
    aleatorio(4);
}



//Modulo 2 - Corte dos fios





function mod2(canvas2){

    let amarelo = "#ffff66";
    let rosa = "#ff80c1";
    let azul = "#99ffdd";
    let branco = "#ffffff";
    let verde = "#66ff99";

    var cores = [amarelo, rosa, azul, branco, verde]
    var cor = [];

    for(i=0; i<5; i++){
        let index_cor = Math.floor(Math.random() * cores.length);
        cor[i] = cores[index_cor];
        cores.splice(index_cor, 1)
}

    

    criarLinha(canvas2, 0, 50, 300, 50, 7, cor[0]);
    criarLinha(canvas2, 0, 100, 300, 100, 7, cor[1]);
    criarLinha(canvas2, 0, 150, 300, 150, 7, cor[2]);
    criarLinha(canvas2, 0, 200, 300, 200, 7, cor[3]);
    criarLinha(canvas2, 0, 250, 300, 250, 7, cor[4]);
}

setInterval(relogio, 1000);
mod2(canvas2);
mod1(canvas1);

/*<------------------- Funcionamento dos módulos ------------------->*/ 

//Módulo 1 

function criarQuadrado(mod1, x1,y1, x2, y2){
    mod1.beginPath();
    mod1.rect(x1,y1,x2,y2);
    mod1.fillStyle = "#f0d45e"
    mod1.stroke();
    mod1.fill();

   
}

function colocarImagem(caixa, MOD1){

    if(caixa == 1){
        xi1 = 35;
        yi1 = 40;
        xf1 = 110;
        yf1 = 110;

        base_image1.onload = function (e)
        {
            MOD1.drawImage(base_image1, xi1, yi1, xf1, yf1);
        }
        base_image1.src = '/media/simbolos/s1.png';
    }

    if(caixa == 2){
        xi2 = 35;
        yi2 = 160;
        xf2 = 110;
        yf2 = 110;

        base_image2.onload = function (e)
        {
            MOD1.drawImage(base_image2, xi2, yi2, xf2, yf2);
        }
        base_image2.src = '/media/simbolos/s2.png';
    }

    if(caixa == 3){
        xi3 = 160;
        yi3 = 40;
        xf3 = 110;
        yf3 = 100;

        base_image3.onload = function (e)
        {
            MOD1.drawImage(base_image3, xi3, yi3, xf3, yf3);
        }
        base_image3.src = '/media/simbolos/s3.png';
    }

    if(caixa == 4){
        xi4 = 160;
        yi4 = 160;
        xf4 = 110;
        yf4 = 110;

        base_image4.onload = function (e)
        {
            MOD1.drawImage(base_image4, xi4, yi4, xf4, yf4);
        }
        base_image4.src = '/media/simbolos/s4.png';
    }
}

//Seleciona uma imagem aleatória
/*
Caso a imagem seja igual ele deverá outra diferente
*/
function aleatorio(imagem){
    var sessao = []
    var entrar = Math.floor(Math.random() * 4) + 1

    let deixar = 'nao';
    for(i = 0; i < sessao.length; i++){
        let verificar = sessao[i];
        if(verificar !== entrar){
            deixar = 'sim'
        }
    }
    

    switch(imagem){
        case 1:
            base_imagem = base_image1
            break;

        case 2:
            base_imagem = base_image2
            break;

        case 3:
            base_imagem = base_image3
            break;
                    
        case 4:
            base_imagem = base_image4
            break;

    }

    switch(entrar){
        case 1: 
            base_imagem.src = '/media/simbolos/s1.png';
            break;
            
        case 2:        
           base_imagem.src = '/media/simbolos/s2.png';
           break;

        case 3:
            base_imagem.src = '/media/simbolos/s3.png';
            break;

        case 4:
            base_imagem.src = '/media/simbolos/s4.png';
            break;
    }

    if(deixar == 'sim'){
        sessao.push(entrar)
    }
}

MOD1.addEventListener('click', (event) => {

    var mouse_y = event.offsetY;
    var mouse_x = event.offsetX;
    if(((mouse_y >= 40) && (mouse_y <= 150)) && ((mouse_x >=35) && (mouse_x <= 145))){
        alert('1');
        sequencia('s1')
    }
    if(((mouse_y >= 40) && (mouse_y <= 150)) && ((mouse_x >=160) && (mouse_x <= 270))){
        alert('2');
        sequencia('s2')
    }
    if(((mouse_y >= 160) && (mouse_y <= 270)) && ((mouse_x >=35) && (mouse_x <= 145))){
        alert('3');
        sequencia('s3')
    }
    if(((mouse_y >= 160) && (mouse_y <= 270)) && ((mouse_x >=160) && (mouse_x <= 270))){
        alert('4');
        sequencia('s4')
    }

})

var aperto = 0;
function sequencia(clicado){
    /*
    1 - Procurar a sequencia no seq.json
    2 - Verificar se ele clicou na ordem correta
    3 - Deixar verde ou vermelho caso clicado errado
    4 - Chorar pq isso n vai ser fácil
    */ 

    var certo = seq1[aperto]
    if(clicado == certo){
        aperto+=1 
        alert(`Sábio ${aperto - 1}`)
    }
    else{
        alert('errado!')
        aperto = 0
    }
}

//Modulo 2

function criarLinha(mod2,x1,y1, x2, y2, gr, cor){
    mod2.beginPath()
    mod2.moveTo(x1,y1)
    mod2.lineTo(x2,y2)
    mod2.strokeStyle = cor
    mod2.lineWidth = gr
    mod2.stroke()
}

function cortar(index_fio){
    
    switch (index_fio){
        case 0:
            xi = 10;
            yi = 45;
            xf = 280;
            yf = 15;
            break;
            
        case 1:
            xi = 10;
            yi = 95;
            xf = 280;
            yf = 15;
            break;
            
        case 2:
            xi = 10;
            yi = 145;
            xf = 280;
            yf = 15;
            break;

        case 3:
            xi = 10;
            yi = 195;
            xf = 280;
            yf = 15;
            break;

        case 4:
            xi = 10;
            yi = 245;
            xf = 280;
            yf = 15;
            break;
    }   

    canvas2.clearRect(xi,yi,xf,yf);

    if(cor[0] == "azul"){
        alert("a")
    }else{
        alert(cor[0])
    }
    

    
}
   

MOD2.addEventListener('click', (event) => {

    //const rect = MOD2.getBoundingClientRect();
    //console.log(event)
    //var mouse_x = event.offsetX;

    var mouse_y = event.offsetY;
    if((mouse_y >= 50-4) && (mouse_y <= 57-4)){
        cortar(0);
    }
    if((mouse_y >= 100-4) && (mouse_y <= 107-4)){
        cortar(1);
    }

    if((mouse_y >= 150-4) && (mouse_y <= 157-4)){
        cortar(2);
    }
    if((mouse_y >= 200-4) && (mouse_y <= 207-4)){
        cortar(3);
    }
    if((mouse_y >= 250-4) && (mouse_y <= 257-4)){
        cortar(4);
    }

})

