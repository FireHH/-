<!--获取随机数-->
function randomNum(){
    var str='abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var str1='';
    for(var i=0;i<4;i++){
        str1+=str[Math.round(Math.random()*61)];
    }
    return str1;
}
document.getElementById('random').innerHTML=randomNum();//初始化

document.getElementById('random').onclick=function () {
    document.getElementById('random').innerHTML=randomNum();
}
