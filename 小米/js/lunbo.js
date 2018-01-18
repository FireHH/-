function  setImage(a) {
    $('.imageList ul li').eq(a%7).fadeIn().siblings().fadeOut();
    $('.focus span').eq(a%7).addClass('cur').siblings().removeClass('cur');
}
//定时器
var timer=null;
var tem=0;
setImage(tem);
function  setTimer() {
    timer=setInterval(function () {
         tem++;
         setImage(tem);
    },2000);
}
setTimer();

//下面的点击切换
$('.leftButton').click(function () {
    clearInterval(timer);
    tem--;
    setImage(tem);
    setTimer();
});

$('.rightButton').click(function () {
    clearInterval(timer);
    tem++;
    setImage(tem);
    setTimer();
});

//点击下面点切换图片
$('.focus span').click(function () {
    setImage($(this).index());

});


//鼠标移入静止
$('.contain').mouseenter(function () {
    clearInterval(timer);
}).mouseleave(function () {
    setTimer();
})





