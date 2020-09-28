score=0;
cross= true;
left= document.getElementById("left");
right= document.getElementById("right");
jump= document.getElementById("jump");
function abc(){
    tiger=document.querySelector('.tiger');
        tiger.classList.add('animatetiger')
        setTimeout(() => {
            tiger.classList.remove('animatetiger')
        }, 400);
}
function def(){
    tiger=document.querySelector('.tiger');
        tigerx=parseInt(window.getComputedStyle(tiger,null).getPropertyValue('left'));
        tiger.style.left=tigerx-112+"px";
}
function ghi(){
        tiger=document.querySelector('.tiger');
        tigerx=parseInt(window.getComputedStyle(tiger,null).getPropertyValue('left'));
        tiger.style.left=tigerx+112+"px";
}
document.onkeydown=function(e){
    if(e.keyCode==13){
        tiger=document.querySelector('.tiger');
        tiger.classList.add('animatetiger')
        setTimeout(() => {
            tiger.classList.remove('animatetiger')
        }, 400);
    }
    if(e.keyCode==39){
        tiger=document.querySelector('.tiger');
        tigerx=parseInt(window.getComputedStyle(tiger,null).getPropertyValue('left'));
        tiger.style.left=tigerx+112+"px";
    }
    if(e.keyCode==37){
        tiger=document.querySelector('.tiger');
        tigerx=parseInt(window.getComputedStyle(tiger,null).getPropertyValue('left'));
        tiger.style.left=tigerx-112+"px";
    }
}


setInterval(() => {
    tiger=document.querySelector('.tiger');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(tiger,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(tiger,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    if(offsetx<50 && offsety<40){
        gameover.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetx<100 && cross){
        score=score+1;
        updatescore(score)
        cross=false
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.2;
            obstacle.style.animationduration = newdur+'s';
            console.log("New: ",newdur);
        }, 500);
    }
}, 100);

function updatescore(score){
    scorecontainer.innerHTML="Your score: "+score
}