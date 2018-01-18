/*
* $(window).scroll( function() { /!* ...do something... *!/ } );
*/
$(window).scroll(function () { //scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
    var res=$(document).scrollTop();
    console.log(res);
    if(res>=500){
        $('.backtop').fadeIn(1000);//淡入
//          $('p').show(1000); //1s之内显示
        //$('p').css('display','block');
    }else{
        $('.backtop').fadeOut(1000)//淡出
//          $('p').hide(2000);//'faster' 'slower'快速缓慢隐藏
        //$('p').css('display','none');
    }
});
$('.backtop').click(function () {
    var res= $(document).scrollTop();
    var timer=setInterval(function () {
        res-=250;
        $(document).scrollTop(res);//设置相对滚动条顶部的偏移
        if(res<=0){
            clearInterval(timer);
        }
    },100);
});