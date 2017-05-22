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
var musicBox = document.querySelector('#musicBox');
var musicAudio = document.querySelector('#musicAudio');
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener('canplay',function () {
        //能播放就执行函数
        can = true;
        musicBox.className = 'music musicMove';
    });
},1000);
oBody.timer = window.setInterval(autoMove,18000);
oBody.addEventListener('touchstart',function(e){
     e = e||window.event;
    window.clearInterval(oBody.timer);
    if(e.target.className.toUpperCase().indexOf('MUSIC') != -1){
        if(!musicAudio.paused){
            musicAudio.pause();
            musicAudio.addEventListener('pause',function () {
                //能播放就执行函数
                musicBox.className = ' music';
            });
        }else{
            musicAudio.play();
            musicAudio.addEventListener('play',function () {
                //能播放就执行函数
                musicBox.className = 'music musicMove';
            });
        }
    }else{
        oBody.startY = e.touches[0].pageY;
    }
});
oBody.addEventListener('touchmove',function(e){
     e  = e||window.event;

    var endY = e.touches[0].pageY;
    oBody.changeY = endY-oBody.startY;
});
oBody.addEventListener('touchend',function(e){
    e  = e||window.event;
    if(e.target.className.toUpperCase().indexOf('MUSIC') == -1){
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
    }
});

var pointer =document.getElementById('pointer');
pointer.onclick = function () {
    index++;
    if(index == slidesAry.length){
        index = 0;
    }
    setSlide();
};


