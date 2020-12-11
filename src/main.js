let string = `/*下面将画出一个哆啦A梦*/
    .cajaovalo {
        position: absolute;
        top: 100px;
        width: 100px;
        height: 5px;
        background: transparent;
        margin: 0 auto;
        position: relative;
        margin-bottom: 10px
    }
    .ovalo {
        width: 100px;
        height: 5px;
        margin: 0 auto;
        background-color: gray;
        border-radius: 5px;
        border: 2px solid gray;
        z-index: 100;
        opacity: 0.6; 
        position: absolute;
        top: 5px;
        animation:rotar .1s infinite linear;
    }
    .semi-circulo {
        width: 20px; 
        height: 10px; 
        display: block;
        border: 2px solid #555; 
        background: #BD8D22;
        border-radius: 100px 100px 0 0;
        position: absolute; 
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        z-index: 2;
    }
    .palo {
        width: 7px;
        height: 30px;
        z-index: 1;
        background: #FCC136;
        position: relative;
        top: 7px;
        border: 2px solid black;
        margin: 0 auto;
    }
    .head{
        position: absolute;
        top: 120px;
        left: 50%;
        margin-left: -105px;
        width: 210px;
        height: 210px;
        background-color: #3c9cc8;
        border:2px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    .head .circle{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background-color: #fff;
        border:2px solid black;
        z-index: 2;
        position: relative;
    }
    .eye{
        width: 50px;
        height: 50px;
        border:1px solid black;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top:2px;
        left: 50%;
        margin-left: -25px;
        z-index: 3;
    }
    .eye.left{
        transform: translateX(-24px);
        position: relative;
    }
    .eye.right{
        transform: translateX(24px);
    }
    .eye .eyeball{
        overflow: hidden;
    }
    .eye .eyeball.left{
        position: absolute;
        top:16px;
        right: 8px;
        width: 12px;
        height: 22px;
        border:5px solid black;
        border-top:8px solid black;
        border-bottom:8px solid black;
        border-radius: 10px;
    }
    .eye .eyeball.right{
        position: absolute;
        top:40px;
        right: 8px;
        width: 32px;
        height: 24px;
        border: 3px solid black;
        border-radius: 50%;
        border-color: black transparent transparent transparent;
    }
    .nose{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:1px solid #000;
        background-color: #B11635;
        margin-left: 68px;
        margin-top: -6px;
    }
    .nose .naris{
        width: 12px;
        height: 12px;
        background-color: #fff;
        margin: 6px 0 0 6px;
        border-radius: 50% ;
    }
    .beard{
        margin-top: -16px;
    }
    .bigotes {
        z-index: 9999;
        position: relative;
        float: left;
        display: inline-block;
        top: -18px;
        left: -2px;
    }
    .b1 {
        width: 62px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        margin-bottom: 18px;
        transform: rotate(25deg);
    }
    .b2 {
        width: 62px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .b3 {
        width: 62px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        transform: rotate(-10deg);
    }
    .bigotes2 {
        z-index: 9999;
        position: relative;
        float: right;
        display: inline-block;
        top: -18px;
        right: -2px;
    }
    .b1_ {
        width: 62px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        margin-bottom: 18px;
        transform: rotate(-25deg);
    }
    .b2_ {
        width: 62px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .b3_ {
        width: 62px;
        height: 2px;
        background-color: black;
        margin: 0 auto;
        transform: rotate(10deg);
    }
    .mouth{
        width: 140px;
        height: 80px;
        margin: 16px 0 0 13px;
        position: relative;
    }
    .reacangle{
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: 2px;
        height: 20px;
        width: 4px;
        background-color: #000;
        position: relative;
    }
    .lip{
        width: 136px;
        height: 68px;
        position: absolute;
        top: 12px;
        left: 50%;
        margin-left: -63px;
        background-color: #B11635;
        border-radius: 0 0 70px 70px;
        overflow: hidden;
    }
    .down {
        position: relative;
        width: 100px;
        height: 70px;
        margin: 0 auto;
    }
    .down::before, .down::after{
        content: "";
        display: block;
        width: 50px;
        height: 80px;
        background: #CA2533; 
        border-radius: 50px 50px 0 0; 
        position: absolute; 
        top:30px ;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
    .down::after {
        left: 50px; 
        transform: rotate(-45deg);
        transform-origin:0 100% ; 
    }
    .hand{
        position: absolute;
        top:250px;
        left:50% ;
        margin-left: -30px;
        width: 60px;
        height: 60px;
        border:2px solid black;
        background-color: #fff;
        border-radius: 50%;
        z-index:5;
    }
    .hand.left{
        transform: translateX(-114px); 
    }
    .hand.right{
        transform: translateX(114px);    
    }
    .arm{
        width: 110px;
        height: 50px;
        position: absolute;
        top:270px;
        left:50% ;
        margin-left: -55px;
        border:2px solid #000;
        background-color: #3c9cc8;
        border-radius: 110px /50px;
        z-index: 4;
    }
    .arm.left{
        transform: translateX(-90px) rotate(45deg);
            
    }
    .arm.right{
        transform: translateX(90px) rotate(-45deg);
        
    }
    .body{
        position: absolute;
        top: 300px;
        left: 50%;
        margin-left: -100px;
        width: 200px;
        height: 100px;
        z-index: 3;
    }
    .bufanda{
        width: 100px;
        height: 50px;
        background-color:#B11635;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        top:-10px;
        border-radius: 100px / 50px;
        z-index: 9;
    }
    .huevo{
        width: 160px;
        height: 200px;
        position: absolute;
        left: 50%;
        margin-left: -80px;
        top:-80px;
        border: 2px solid black;
        background-color:#3c9cc8 ;
        border-radius: 180px / 200px;
        z-index: -1;
        position: relative;
    }
    .ovalocesta{
        width: 100px;
        height: 70px;
        background-color:#fff ;
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -50px;
        border-radius: 100px / 70px;
    }
    .campana {
        width: 40px;
        height: 40px;
        border: 2px solid black;
        border-radius: 100%;
        background-color: #F19629;
        position: absolute; 
        right: 0;
        top: -54px;
        left: 0;
        bottom: -60px;
        margin: auto;
        z-index: 10;
    }
    .bolanegra {
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color:black;
        position: absolute; 
        right: 0;
        top: 8px;
        left: 0;
        bottom: 0;
        margin: auto;
    }
    .palonegro {
        width: 2px;
        height: 15px;
        background-color: black;
        margin: 0 auto;
        position: relative;
        top: 18px;
    }
    .cesta {
        width: 60px; 
        height: 30px; 
        border-radius:0 0 60px 60px ;
        background: white;
        border: 2px solid black;
        position: absolute; 
        right: 0;
        top: 0;
        left: 0;
        bottom: -20px;
        margin: auto;
        z-index: 2;
    }
    .foot{
        position: absolute;
        top:350px;
        left:50% ;
        margin-left: -30px;
        width: 60px;
        height: 100px;
        border:2px solid black;
        background-color: #fff;
        border-radius: 50%;
        border-radius: 50%;
    }
    .foot.left{
        transform: translateX(-30px);     
    }
    .foot.right{
        transform: translateX(30px);
    }
    /*让哆啦A梦动起来*/
     @keyframes rotar {
         from {
             transform: rotate3D(0, 1, 0, 0deg);
         }
         to {
             transform: rotate3D(0, 1, 0, 360deg);
         }
     }
    @keyframes volar{
        0%   {top:0px;}
        25%  {top:10px;}
        50%  {top:30px;}
        75%  {top:30px;}
        100% {top:0px;}
    }
    
    `
let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
console.log(n + ';' + string.substr(7, n));
let time = 100
const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(timer)
        return
    }
    console.log(n + ';' + string.substr(0, n));
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = 9999;
}
const play = () => {
    return setInterval(run, time)
}
const pause = () => {
    window.clearInterval(timer);
}
const slow = () => {
    pause()
    time = 100;
    timer = play()
}
const normal = () => {
    pause()
    time = 50;
    timer = play()
}
const fast = () => {
    pause()
    time = 0;
    timer = play()
}
let timer = play();
btnPause.onclick = pause;
btnPlay.onclick = () => {
    timer = play();
}
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;