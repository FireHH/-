var check1=document.getElementById('check');
var check2=document.getElementById('check2');
var check3=document.getElementById('check3');
var hidden=document.getElementById('hidden');

var price=document.getElementsByClassName('price');
var count=document.getElementsByClassName('count');
function  sumPrice() {
    /*购物车计算*/
    var sum=0;
    var count1=0;
    for(var i=0;i<price.length;i++){
        var p=parseFloat(price[i].innerText);
        var c=count[i].value;
        sum+=p*c;
        count1=count1+parseFloat(c);
    }
    var sumprice=document.getElementById('sum');
    var or=document.getElementById('or');//结果显示的数量
    sumprice.innerHTML=sum+'元';
    or.innerHTML=count1;
}
/*多选*/
check1.onclick=function () {
    check1.style.background='url("image/check2.png") no-repeat';
    check2.style.background='url("image/check2.png") no-repeat';
    check3.style.background='url("image/check2.png") no-repeat';
    hidden.style.display='block';
    sumPrice();
    return false;
}
/*单选*/
var flag=0;
$('.check').click(function () {
    if(flag===0){
        $(this).css('background','url("image/check2.png")no-repeat');
        $('#hidden').css('display','block');
        sumPrice();
        flag=1;
        return false;

    }else{
        $(this).css('background','url("image/check.png")no-repeat');
        $('#hidden').css('display','none');
        flag=0;
        sumPrice();
        return false;
    }

});
