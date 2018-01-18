var list=document.getElementById('list');
var li=list.getElementsByTagName('li');
var list2=document.getElementById('list2');

console.log(li);

    list.onclick=function (e) {
        e = e || window.event;
        // e.target.style.borderColor='orangered';
        e.target.style.borderColor='orangered';
        return true;
    }

var img=document.getElementById('left');

    list2.onclick=function (e) {
        e = e || window.event;
        if (e.target.className === 'li1') {
            e.target.style.borderColor = 'orangered';
            img.firstElementChild.src = './images/phone.jpg';
        } else if (e.target.className === 'li2') {
            e.target.style.borderColor = 'orangered';
            img.firstElementChild.src = './images/phone2.jpg';
        } else {
            img.firstElementChild.src = './images/phone3.jpg';
            e.target.style.borderColor = 'orangered';
        }
    }
 var baoxian=document.getElementsByClassName('baoxian');
    var flag=0;
baoxian[0].onclick=function () {
    if(flag===0){
        this.style.borderColor='orangered';
        document.getElementById('quite').innerHTML='√';
        document.getElementById('quite').style.borderColor='white';
        document.getElementById('quite').style.color='white';
        document.getElementById('quite').style.backgroundColor='orangered';
        flag=1;
        return false;
    }else{
        this.style.borderColor='#b0b0b0';
        document.getElementById('quite').innerHTML='';
        document.getElementById('quite').style.borderColor='#b0b0b0';
        document.getElementById('quite').style.color='black';
        document.getElementById('quite').style.backgroundColor='white';
        flag=0;
        return false;

    }

}

//搜索框下拉列表
$('.search input').focus(function () {
    $('.linkList').css('display','block');
    $(this).css('borderColor','orangered');
    $(this).next().css('borderColor','orangered');
}).blur(function () {
    $('.linkList').css('display','none');
    $(this).css('borderColor','#b0b0b0');
    $(this).next().css('borderColor','#b0b0b0');
})
