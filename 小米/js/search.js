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

/*
* 左边列表弹出项*/

var product=document.getElementById('product');

var list1=document.getElementById('uli1');
var list2=document.getElementById('uli2');
var list3=document.getElementById('uli3');
var list4=document.getElementById('uli4');
var list5=document.getElementById('uli5');
//当鼠标移动到某对象范围的上方时触发的事件

$('.u li').mouseenter(function () {
    $('.hiddenlist div.rightlist').eq($(this).index()).css('display','block').siblings().css('display','none').mouseleave(function () {
        $('.hiddenlist div.rightlist').eq($(this).index()).css('display','none');
    });
});


/*
list1.onmouseover=function () {
    product.style.display='block';
}
product.onmouseover=function () {
    product.style.display='block';
}

list3.onmouseover=function () {
    product.style.display='block';
}
product.onmouseover=function () {
    product.style.display='block';
}

list5.onmouseover=function () {
    product.style.display='block';
}
product.onmouseover=function () {
    product.style.display='block';
}
// 当鼠标离开某对象范围时触发的事件
list1.onmouseout=function () {
    product.style.display='none';
}
product.onmouseout=function () {
    product.style.display='none';
}

list3.onmouseout=function () {
    product.style.display='none';
}
product.onmouseout=function () {
    product.style.display='none';
}

list5.onmouseout=function () {
    product.style.display='none';
}
product.onmouseout=function () {
    product.style.display='none';
}
*/

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
            $('.in .right .end  .link').addClass('cur');
        });
    }else{
        $('.in .down').finish().show();
        flag=1;
        $('.in .right .end  .link').addClass('cur');
    }


}).mouseleave(function () {
    if(flag==1){
        $('.in .down').slideUp(function () {
            flag=0;
            $('.in .right .end  .link').removeClass('cur');
        });
    }


});
