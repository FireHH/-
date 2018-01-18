var inp = document.getElementById('query');
var sub = document.getElementById('submit');
var sdiv = document.getElementById('search');
var click=document.getElementById('linkList');
var example1=document.getElementById('example1');
var example2=document.getElementById('example2');
inp.onfocus = function () {
    sdiv.style.borderColor='orangered';
    sub.style.borderColor='orangered';
    click.style.display='block';
    example1.style.display='none';
    example2.style.display='none';

}
inp.onblur=function () {
    sdiv.style.borderColor='silver';
    sub.style.borderColor='silver';
    click.style.display='none';
    example1.style.display='block';
    example2.style.display='block';

}



/*//鼠标移入下拉列表
$('.content ').on('mouseenter',function () {
    $('.content .hidden div').eq($('.content .list  a').index()).attr('display','block');
    console.log($('.content .list a').index());
});*/

/*

$('.content').mouseenter(function () {
    $('.ocntent .hidden div').eq()
})
*/


var list=document.getElementById('list');
var phones=list.getElementsByTagName('li');
// 获取所有的隐藏域
var down=document.getElementById('downlist');
var downlists=down.getElementsByTagName('div');
console.log(phones);
for(var i=0;i<phones.length;i++){
    //给每一个phones[i]对象一个标记属性存i
    phones[i].index=i;
    phones[i].onmouseover=function () {
        downlists[this.index].style.display='block';
        // $(downlists[this.index]).slideDown();
    }
    phones[i].onmouseout=function () {
        downlists[this.index].style.display='none';
        // $(downlists[this.index]).slideUp();
    }
}


//购物车效果
var flag=0;
$('.in .shop').mouseenter(function () {
    if(flag==0){
        $('.in .down').slideDown(function () {
            flag=1;
        });
    }else{
        $('.in .down').finish().show();
        flag=1;
    }

    $('.in .right .end  a').addClass('cur');

}).mouseleave(function () {
    if(flag==1){
        $('.in .down').slideUp(function () {
            flag=0;
        });
    }
    $('.in .right .end  a').removeClass('cur');
});

$('.rightmain .aa .search').focus(function () {
    $(this).css('borderColor','orangered').parent().css('borderColor','orangered');
    console.log($(this).parent());
});

$('.rightmain .aa .search').blur(function () {
    $(this).css('borderColor','silver').parent().css('borderColor','silver');
});
