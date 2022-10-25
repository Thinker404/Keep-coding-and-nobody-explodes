
/* 
    No Princípio...
    Haviam um total de 3 pessoas...
    Que sabiam como esse código funcionada...
    Davi, Orochi e Deus...
    Atualmente, apenas Deus sabe como isso ainda roda

*/


//========================================================
//===================INICIANDO VARIAVEIS==================
//========================================================

//mod1
var ids = [66366336, 666366636, 10100110, 10110110];
var modulo1;
var seq1 = [1, 3, 4, 2, 9];
var seq2 = [5, 6, 7, 8];
var seq3 = [1, 2, 3, 4];
var seq4 = [5, 4, 3, 2];

//mod2
var array = []; //Verificar a partir da sequencia correta
var fio_certo = {};


//funções
function selectID(){
    idIndex = Math.floor(Math.random()*4)
    id = ids[idIndex];
    document.getElementById("ID").innerHTML = id;
}
function playExplosion() {
    var audio = new Audio('/media/explosion.mp3');
    audio.play();
}

//========================================================
//========================================================
//========================================================




//========================================================
//======Setando canvas e condicação de jogo===============
//========================================================

var mods_escolhidos = [];
var mods = ['mod_1', 'mod_2', 'mod_3', 'mod_4'];
var m1, m2, m3, m4;
var incomplete = true;

//criando canvas
const MOD1 = document.getElementById('mod_1');
const MOD2 = document.getElementById('mod_2');
const MOD3 = document.getElementById('mod_3');
const MOD4 = document.getElementById('mod_4');
const canvas1 = MOD1.getContext('2d');
const canvas2 = MOD2.getContext('2d');
const canvas3 = MOD3.getContext('2d');
const canvas4 = MOD4.getContext('2d');

//carregando imagens do módulo 1
var base_image1 = new Image();
var base_image2 = new Image();
var base_image3 = new Image();
var base_image4 = new Image();

//condigurando canvas
MOD1.width = 300
MOD1.height = MOD1.width;

MOD2.width = 300
MOD2.height = MOD2.width;

MOD3.width = 300
MOD3.height = MOD3.width;

MOD4.width = 300
MOD4.height = MOD4.width;

//variaveis para condição de jogo
var min = 06;
var sec = 00;
var condiçãoDeJogo = true;

//========================================================
//========================================================
//========================================================




//========================================================
//============RELÓGIO E CONDIÇÃO DE JOGO==================
//========================================================

//Relógio da bomba
function relogio() {
    if(condiçãoDeJogo){

        if(min == 00 && sec == 00){         //Testando se você perdeu (;
            alert("You lose!");
            playExplosion();
            canvas1.clearRect(0,0,400,400);
            canvas2.clearRect(0,0,400,400);
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

//========================================================
//========================================================
//========================================================




//========================================================
//================Animação e Desenho======================
//========================================================

//Desenhando
function criarLinha(mod2,x1,y1, x2, y2, gr, cor){
    mod2.beginPath()
    mod2.moveTo(x1,y1)
    mod2.lineTo(x2,y2)
    mod2.strokeStyle = cor
    mod2.lineWidth = gr
    mod2.stroke()
}

//funções de animação
function pisca_verde_animation(quadro){
    let x=20;
    let y=20;
    let radius=10;
    quadro.beginPath();
    quadro.fillStyle = '#00FF00';
    quadro.arc(x,y,radius,0,Math.PI*2);
    quadro.fill();
}
function pisca_cinza_animation(quadro){
    let x=20;
    let y=20;
    let radius=10;
    quadro.beginPath();
    quadro.fillStyle = '#FF0000';
    quadro.arc(x,y,radius,0,Math.PI*2);
    quadro.fill();
}
function desativado(quadro){
    let x=20;
    let y=20;
    let radius=10;
    quadro.beginPath();
    quadro.fillStyle = '#FF0000';
    quadro.arc(x,y,radius,0,Math.PI*2);
    quadro.fill();
}

//Chamando as funções
var fps_pisca = 1;
var tempo = 0;
var m1, m2, m3, m4;
function pisca_call(timestamp){
    setTimeout(function(){ //requestAnimationFrame to 20fps

        if(tempo == 0){
            if(!m1){pisca_verde_animation(canvas1)}
            if(!m2){pisca_verde_animation(canvas2)}
            if(!m3){pisca_verde_animation(canvas3)}
            if(!m4){pisca_verde_animation(canvas4)}
            tempo = 1;
        }else{
            pisca_cinza_animation(canvas1)
            pisca_cinza_animation(canvas2)
            pisca_cinza_animation(canvas3)
            pisca_cinza_animation(canvas4)
            tempo = 0;
        }
        requestAnimationFrame(pisca_call)
        
    }, 1000/fps_pisca)
}
requestAnimationFrame(pisca_call);

//========================================================
//========================================================
//========================================================




//========================================================
//============Módulo I - sequencia de simbolos============
//========================================================

//Criando o fundo
function criarQuadrado(mod1, x1,y1, x2, y2){
    mod1.beginPath();
    mod1.rect(x1,y1,x2,y2);
    mod1.fillStyle = "#f0d45e"
    mod1.stroke();
    mod1.fill();   
}

function sorteio(){
    let sorteio = Math.floor(Math.random() * 2) + 1;
    
    switch(sorteio){
        case 1:
            modulo1 = seq1 
            break
        case 2:
            modulo1 = seq2
            break
    }
}
//Criando quadro das imagens
function mod1(canvas1, array){

    sorteio()

    criarQuadrado(canvas1, 35,40,110,110);
    colocarImagem(1, canvas1);
    imagemaleatorio(1, array);

    criarQuadrado(canvas1, 35,160,110,110);
    colocarImagem(2, canvas1);
    imagemaleatorio(2, array);

    criarQuadrado(canvas1, 160,40,110,110);
    colocarImagem(3, canvas1);
    imagemaleatorio(3, array);

    criarQuadrado(canvas1, 160,160,110,110);
    colocarImagem(4, canvas1);
    imagemaleatorio(4, array);
}

//Carrega as imagens nos seus respectivos lugares
function colocarImagem(caixa, MOD1){
    //caixa 1
    if(caixa == 1){
        xi1 = 35;
        yi1 = 40;
        xf1 = 110;
        yf1 = 110;
        base_image1.onload = function (e)
        {
            MOD1.drawImage(base_image1, xi1, yi1, xf1, yf1);
        }
    }
    //caixa 2
    if(caixa == 2){
        xi2 = 35;
        yi2 = 160;
        xf2 = 110;
        yf2 = 110;
        base_image2.onload = function (e)
        {
            MOD1.drawImage(base_image2, xi2, yi2, xf2, yf2);
        }
    }
    //caixa 3
    if(caixa == 3){
        xi3 = 160;
        yi3 = 40;
        xf3 = 110;
        yf3 = 110;
        base_image3.onload = function (e)
        {
            MOD1.drawImage(base_image3, xi3, yi3, xf3, yf3);
        }
    }
    //caixa 4
    if(caixa == 4){
        xi4 = 160;
        yi4 = 160;
        xf4 = 110;
        yf4 = 110;
        base_image4.onload = function (e)
        {
            MOD1.drawImage(base_image4, xi4, yi4, xf4, yf4);
        }
    }
}

//Seleciona uma imagem aleatória
function imagemaleatorio(imagem, array){

    let valorDoArray = seq1;
    

    let entradaDoArray = false;
    //Faz um sorteio de números e coloca a imagem referente ao número enquanto todos os valores forem diferentes
    do{
       
        /*
            var entrar
            do{
                entrar =  Math.floor(Math.random() * 4) + 1;
                let saida = false;
                for(let i = 0; i < valorDoArray.length){
                    let verificar = array[i];
                    if(verificar == entrar){
                    permitir = false;
                }
                }
            }while(!saida)
            if(array.length == 0){
                entradaDoArray = true
            }else{
                let permitir = true;
                //Comparar as imagens para ver se são iguais
                for(let i = 0; i < array.length; i++){
                    let entrada = valorDoArray[entrar]
                    let verificar = array[i];
                    if(verificar == entrada){
                        permitir = false;
                    }
                }
                if(permitir){
                    entradaDoArray = true
                }
            }
        */

        
        //Variavel de sorteio
        var entrar = Math.floor(Math.random() * 9) + 1;
        //Verifica se o tamanho do array(as imagens) é igual a zero(não tem imagem colocada nos quadros) então deixa a imagem sorteiada entrar;
        if(array.length == 0){
            entradaDoArray = true
        }else{
            let permitir = true;
            //Comparar as imagens para ver se são iguais
            for(i = 0; i < array.length; i++){
                let verificar = array[i];
                if(verificar == entrar){
                    permitir = false;
                }
            }
            if(permitir){
                entradaDoArray = true
            }
        }
    }while(!entradaDoArray);
    //Verifica a qual quadro ele deve colocar a imagem
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

    //Coloca a a foto no quadro 
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

        case 5:
            base_imagem.src = '/media/simbolos/s5.png';
            break;

        case 6:
            base_imagem.src = '/media/simbolos/s6.png';
            break;
        
        case 7:
            base_imagem.src = '/media/simbolos/s7.png';
            break;
        
        case 8:
            base_imagem.src = '/media/simbolos/s8.png';
            break;
        case 9: 
            base_imagem.src = '/media/simbolos/s9.png';
            break; 
    }
    if(entradaDoArray){
        array.push(`${entrar}`);
    }
}

//Ouvindo os cliques
MOD1.addEventListener('click', (event) => {

    var mouse_y = event.offsetY;
    var mouse_x = event.offsetX;
    if(((mouse_y >= 40) && (mouse_y <= 150)) && ((mouse_x >=35) && (mouse_x <= 145))){
        sequencia('s1')
    }
    if(((mouse_y >= 40) && (mouse_y <= 150)) && ((mouse_x >=160) && (mouse_x <= 270))){
        sequencia('s2')
    }
    if(((mouse_y >= 160) && (mouse_y <= 270)) && ((mouse_x >=35) && (mouse_x <= 145))){
        sequencia('s3')
    }
    if(((mouse_y >= 160) && (mouse_y <= 270)) && ((mouse_x >=160) && (mouse_x <= 270))){
        sequencia('s4')
    }

})

var aperto = 0;
function sequencia(clicado){

    /*
    1 - Comparar o array com o .json
    2 - Colocar a ordem correta
    3 - Verificar se a ordem esta correta
    4 - Chorar pq isso n vai ser fácil
    */ 
    var certo = seq1[aperto]
    if(clicado == certo){
        aperto+=1 
        
        if(aperto == 4){
            m1 = true;
            desativado(canvas1)
        }

    }else{
        aperto = 0;
        alert('KABUM!')
        min = 0;
        sec = 0;
    }
}

//========================================================
//========================================================
//========================================================




//========================================================
//==============Módulo II - Corte dos fios================
//========================================================

function mod2(canvas2){

    //Definindo valor das cores e
    let amarelo = "#ffff66";
    let rosa = "#ff80c1";
    let azul = "#99ffdd";
    let branco = "#ffffff";
    let verde = "#66ff99";
    //Número de fios:
    var nf_amarelo = 0;
    var nf_rosa = 0;
    var nf_azul = 0;
    var nf_branco = 0;
    var nf_verde = 0;

    var cor = [];
    var cores = [amarelo, rosa, azul, branco, verde]

    //sorteando cor dos fios
    for(i=0; i<5; i++){
        let index_cor = Math.floor(Math.random() * cores.length);
        cor[i] = cores[index_cor];
        
        //Permitindo 2 fios de cada cor
        var target = cores[index_cor]
        let counter = 0;
        for (item of cor){
            if (item == target){
                counter++;
            }
        };

        //contando fios
        switch(target){
        case "#ffff66":
            nf_amarelo++;
            break;
        case "#ff80c1":
            nf_rosa++;
            break;
        case "#99ffdd":
            nf_azul++;
            break;
        case "#ffffff":
            nf_branco++;
            break;
        case "#66ff99":
            nf_verde++;
            break;
    }
        if(counter > 1){
            cores.splice(index_cor, 1)
        }
    }
    
    //Definindo qual fio cortar
    switch(nf_branco){
        case 0:
            if(cor[2] == "#66ff99"){
                fio_certo.num = 2;
            }else if(nf_rosa > 1){
                fio_certo.num = 0;
            }else{
                fio_certo.num = 4;
            }
            break;

        case 1:
            if(cor[0] == "#99ffdd"){
                if(cor[4] == "#ff80c1"){
                    fio_certo.num = 0;
                }else{
                    fio_certo.num = 4;
                }
            }else if(cor[0] == "#ffffff"){
                if(cor[4] == "ff80c1"){
                    fio_certo.num = 2;
                }else if (cor[4] == "#99ffdd"){
                    fio_certo.num = 1;
                }else{
                    fio_certo.num = 3;
                }
            }else{
                fio_certo.num = 0;
            }
            break;

        case 2:
            if(nf_verde == 0){
                fio_certo.num = 3;
            }else if(nf_verde == 1){
                fio_certo.num = 2;
            }else{
                fio_certo.num = 4;
            }
            break;
    }

    //desenhando fios
    criarLinha(canvas2, 0, 50, 300, 50, 7, cor[0]);
    criarLinha(canvas2, 0, 100, 300, 100, 7, cor[1]);
    criarLinha(canvas2, 0, 150, 300, 150, 7, cor[2]);
    criarLinha(canvas2, 0, 200, 300, 200, 7, cor[3]);
    criarLinha(canvas2, 0, 250, 300, 250, 7, cor[4]);
}

//Checando o que fazer com o fio cortado
function fio_cortado(fio){
    if(fio == fio_certo.num){
        m2 = true;
        return alert("mestre dos fios")
        
    }else{
        console.log(fio)
        return alert("kabum katau")
        min = 0;
        sec = 0;
    }
}

//Checando se o fio foi cortado
function cortar(index_fio){
    switch (index_fio){
        case 0:
            xi = 10;
            yi = 45;
            xf = 280;
            yf = 15;
            fio_cortado(0)
            break;
        case 1:
            xi = 10;
            yi = 95;
            xf = 280;
            yf = 15;
            fio_cortado(1)
            break;
        case 2:
            xi = 10;
            yi = 145;
            xf = 280;
            yf = 15;
            fio_cortado(2)
            break;
        case 3:
            xi = 10;
            yi = 195;
            xf = 280;
            yf = 15;
            fio_cortado(3)
            break;
        case 4:
            xi = 10;
            yi = 245;
            xf = 280;
            yf = 15;
            fio_cortado(4)
            break;
    }   
    canvas2.clearRect(xi,yi,xf,yf);
}

//Ouvindo clicos
MOD2.addEventListener('click', (event) => {
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

//========================================================
//========================================================
//========================================================




//========================================================
//===========Módulo III - Botão de apertar===============
//========================================================

var md3_colors = ['#ffffff', '#99ffdd', '#ff80c1']
var md3_cor_idx = Math.floor(Math.random()*3);
var md3_cor = md3_colors[md3_cor_idx];

function mod3(canvas){
    //rosa = "#ff80c1"
    //azul = "#99ffdd*"
    //branco = "#ffffff"
    spriteBtn();
}

function spriteBtn(){
    let x=300/2;
    let y=300/2;
    let radius=100;
    canvas3.beginPath();
    canvas3.fillStyle = '#422600';
    canvas3.arc(x,y,radius+5,0,Math.PI*2)
    canvas3.fill()
    canvas3.beginPath()
    canvas3.fillStyle = md3_cor;
    canvas3.arc(x,y,radius,0,Math.PI*2);
    canvas3.fill()
}

MOD3.onclick = function(e) {
    var rect = this.getBoundingClientRect(),   // get abs. position of canvas
        x = e.clientX - rect.left,             // adjust mouse-position
        y = e.clientY - rect.top;
    
    getArc(150, 150, 100);                        // get path wo/ filling/stroking it
    if (canvas3.isPointInPath(x, y)) alert("Clicked");
  };

  function getArc(x, y, r) {
    canvas3.beginPath();
    canvas3.arc(x, y, r, 0, Math.PI*2);
    canvas3.closePath();
  }

//========================================================
//========================================================
//========================================================




//========================================================
//===================CALLING EVERYTHING===================
//========================================================

setInterval(relogio, 1000); 
mod1(canvas1, array);
mod2(canvas2);
mod3(canvas3);
selectID();

//========================================================
//========================================================
//========================================================
