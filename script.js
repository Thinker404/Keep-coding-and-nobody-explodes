
function padrao(ctx){
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.ellipse(20,20,10,10,0,0,2*Math.PI,false);
    ctx.lineWidth = "2";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.rect(5,5,290,290)
    ctx.stroke();
}

function cinza(ctx){
    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.ellipse(20,20,10,10,0,0,2*Math.PI,false);
    ctx.lineWidth = "2";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.rect(5,5,290,290)
    ctx.stroke();
}


function animate(tela, t){
    
    requestAnimationFrame(animate);
    
    
    
    if(t == 0){
        cinza(tela);
        t = 1;
        return;
    }else{
        padrao(tela);
        t = 0;
        return;
    }
}

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

var t

var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;

let min = 06;
let sec = 00;

let condiçãoDeJogo = true;

setInterval(animate(canvas1,t1), 1000)
setInterval(relogio, 1000);

