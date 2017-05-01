var container = document.getElementsByClassName('container')[0],
    wrapper = container.getElementsByClassName('wrapper')[0],
    square = wrapper.getElementsByClassName('square')[0],
    oUl = square.getElementsByTagName('ul'),
    winHeight = document.documentElement.clientHeight;
function creatLi() {
    var winw = document.documentElement.clientWidth;
    for (var i = 0; i < oUl.length; i++) {
        var curUl = oUl[i],
            ulHeight = 0;
        while (ulHeight < winHeight) {
            var curLi = document.createElement('li');
            var random = (Math.round(Math.random() * 100 + 50)) / 100;
            curLi.style.height = random + 'rem';
            curUl.appendChild(curLi);
            ulHeight += random * 100 * (winw / 750);
        }
    }
}
creatLi();
function fadeIn() {
    var olis = square.getElementsByTagName('li');
    for(var i= 0;i<olis.length;i++){
        var random = (Math.random()*4+7.3)+'s';
//            var ran2 = Math.round(Math.random()*400-200)+'px';
//            olis[i].style.webkitTransform = 'translateZ('+ran2+')';
//            olis[i].style.transform = 'translateZ('+ran2+')';
        olis[i].style.webkitAnimationDelay = random;
        olis[i].style.animationDelay = random;
    }
}
fadeIn();
var slides = container.getElementsByClassName('slide');
var slidesAry = [].slice.call(slides,0);
var index = 0;
function setSlide() {
    for (var i =0;i<slidesAry.length;i++){
        if(i == index){
//                console.log(1);
            slidesAry[i].style.display = 'block';
            slidesAry[i].style.opacity = 1;
            slidesAry[i].style.zIndex = 1;
        }else{
            slidesAry[i].style.display = 'none';
            slidesAry[i].style.opacity = 0;
            slidesAry[i].style.zIndex = 0;
        }
    }
}
function autoMove() {
    index ++;
    if(index == slidesAry.length){
        index = 0;
    }
    setSlide();
}
var timer = setInterval(autoMove,18000);
var oBody = document.getElementById('body');
oBody.onTouchStart= function (e) {
    e.preventDefault();
    console.log(1);
    var startX = e.originalEvent.changedTouches[0].pageX;
    var startY = e.originalEvent.changedTouches[0].pageY;
};
oBody.onTouchMove=function (e) {
    e.preventDefault();
    var moveEndX =e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX -startX,
        Y = moveEndY - startY;
    if(Y>0){
        index ++;
        if(index == slidesAry.length){
            index = 0;
        }
    }
    if(Y<0){
        index--;
        if(index == -1){
            index = slidesAry.length-1;
        }
    }
    setSlide();
};
var pointer =document.getElementById('pointer');
pointer.onclick = function () {
    index++;
    if(index == slidesAry.length){
        index = 0;
    }
    setSlide();
}
