
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

//Modulo dos fios
function mod2(canvas2){
    criarLinha(canvas2, 0, 50, 300, 50, 7, 'red');
    criarLinha(canvas2, 0, 100, 300, 100, 7, 'black');
    criarLinha(canvas2, 0, 150, 300, 150, 7, 'green');
    criarLinha(canvas2, 0, 200, 300, 200, 7, 'yellow');
    criarLinha(canvas2, 0, 250, 300, 250, 7, 'grey');
}

function erased(canvas2){
    if(){}
}

//setInterval(animate(canvas1,t1), 1000)
setInterval(relogio, 1000);
mod2(canvas2)

function criarLinha(mod2,x1,y1, x2, y2, gr, cor){
    mod2.beginPath()
    mod2.moveTo(x1,y1)
    mod2.lineTo(x2,y2)
    mod2.strokeStyle = cor
    mod2.lineWidth = gr
    mod2.stroke()
}