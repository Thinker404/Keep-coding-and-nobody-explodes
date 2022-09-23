
// function padrao(ctx){
//     ctx.beginPath();
//     ctx.fillStyle = 'green';
//     ctx.ellipse(20,20,10,10,0,0,2*Math.PI,false);
//     ctx.lineWidth = "2";
//     ctx.stroke();
//     ctx.fill();
//     ctx.beginPath();
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = "2";
//     ctx.rect(5,5,290,290)
//     ctx.stroke();
// }

// function cinza(ctx){
//     ctx.beginPath();
//     ctx.fillStyle = 'gray';
//     ctx.ellipse(20,20,10,10,0,0,2*Math.PI,false);
//     ctx.lineWidth = "2";
//     ctx.stroke();
//     ctx.fill();
//     ctx.beginPath();
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = "2";
//     ctx.rect(5,5,290,290)
//     ctx.stroke();
// }


// function animate(tela, t){
    
//     requestAnimationFrame(animate);
//     tela.clearRect(0, 0, 100, 100);
    
    
//     if(t == 0){
//         cinza(tela);
//         t = 1;
//         return;
//     }else{
//         padrao(tela);
//         t = 0;
//         return;
//     }
// }

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

function mod1(canvas1){
    criarQuadrado(canvas1, 35,40,110,110);
    criarQuadrado(canvas1, 35,160,110,110);
    criarQuadrado(canvas1, 160,40,110,110);
    criarQuadrado(canvas1, 160,160,110,110);
}



//Modulo 2 - Corte dos fios
function mod2(canvas2){
    criarLinha(canvas2, 0, 50, 300, 50, 7, 'red');
    criarLinha(canvas2, 0, 100, 300, 100, 7, 'black');
    criarLinha(canvas2, 0, 150, 300, 150, 7, 'green');
    criarLinha(canvas2, 0, 200, 300, 200, 7, 'yellow');
    criarLinha(canvas2, 0, 250, 300, 250, 7, 'grey');
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

MOD1.addEventListener('click', (event) => {

    var mouse_y = event.offsetY;
    var mouse_x = event.offsetX;
    if(((mouse_y >= 40) && (mouse_y <= 150)) && ((mouse_x >=35) && (mouse_x <= 145)) ){
        alert('1');
    }
    if(((mouse_y >= 40) && (mouse_y <= 150)) && ((mouse_x >=160) && (mouse_x <= 270)) ){
        alert('2');
    }
    if(((mouse_y >= 160) && (mouse_y <= 270)) && ((mouse_x >=35) && (mouse_x <= 145)) ){
        alert('3');
    }
    if(((mouse_y >= 160) && (mouse_y <= 270)) && ((mouse_x >=160) && (mouse_x <= 270)) ){
        alert('4');
    }

})

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
    //sim
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

