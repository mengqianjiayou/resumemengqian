var container = document.getElementsByClassName('container')[0],
    wrapper = container.getElementsByClassName('wrapper')[0],
    square = wrapper.getElementsByClassName('square')[0],
    oUl = square.getElementsByTagName('ul'),
    winHeight = document.documentElement.clientHeight;
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
var oBody = document.getElementById('body');

oBody.timer = window.setInterval(autoMove,18000);
oBody.addEventListener('touchstart',function(e){
     e = e||event;
    window.clearInterval(oBody.timer);
    oBody.startY = e.touches[0].pageY;
    console.log(oBody.startY);
});
oBody.addEventListener('touchmove',function(e){
     e  = e||event;
    var endY = e.touches[0].pageY;
    oBody.changeY = endY-oBody.startY;
});
oBody.addEventListener('touchend',function(e){
    e  = e||event;
    if(oBody.changeY<0){
        index++;
        if(index === slidesAry.length){
            index = 0;
        }
    }else{
        index--;
        if(index === -1){
            index = slidesAry.length-1;
        }
    }
    setSlide();
    oBody.timer = window.setInterval(autoMove,18000);
});

var pointer =document.getElementById('pointer');
pointer.onclick = function () {
    index++;
    if(index == slidesAry.length){
        index = 0;
    }
    setSlide();
};

