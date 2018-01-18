/*获取用户输入的表单信息*/
var username=document.getElementById('username');
var password=document.getElementById('password');
var repassword=document.getElementById('repassword');
var tel=document.getElementById('tel');
var randominput=document.getElementById('randominput');

/*获取隐藏域*/
var hidden1=document.getElementById('hidden1');
var hidden2=document.getElementById('hidden2');
var hidden3=document.getElementById('hidden3');
var hidden4=document.getElementById('hidden4');
var hidden5=document.getElementById('hidden5');

/*获取输入错误的警告*/
var waring1=document.getElementById('waring1');
var waring2=document.getElementById('waring2');
var waring3=document.getElementById('waring3');
var waring4=document.getElementById('waring4');
var waring5=document.getElementById('waring5');

/*获取输入正确的图片*/
var usernameok=document.getElementById('usernameok');
var passwordok=document.getElementById('passwordok');
var repasswordok=document.getElementById('repasswordok');
var telok=document.getElementById('telok');
var randomok=document.getElementById('randomok');

var bn1=false;
var bn2=false;
var bn3=false;
var bn4=false;
var bn5=false;

//给手机验证码输入框设置获取焦点事件
document.getElementById('telinput').onfocus=function () {
    document.getElementById('telinput').setAttribute("placeholder",'');
}
document.getElementById('telinput').onblur=function () {
    document.getElementById('telinput').setAttribute("placeholder",'请输入手机验证码');
}



username.onfocus=function () {
    hidden1.style.display='block';
    waring1.style.display='none';
    username.setAttribute("placeholder","");
}
username.onblur=function () {
    hidden1.style.display='none';
    username.setAttribute("placeholder","你的账户名和登录名");
    /*数字，字母下划线或者中文 4-16位 /^\w[\u4e00-\u9fa5]{4,16}$/*/
    var reg= /^[a-zA-Z]\w{3,15}$/;
    var usernameValue=username.value;
    //当输入不为空时判断输入是否正确
    if(usernameValue!==''){
        if(!reg.test(usernameValue)){
            waring1.style.display='block';
            document.getElementById('inputusername').style.borderColor='red';
        }else{
            waring1.style.display='none';
            document.getElementById('inputusername').style.borderColor='#c5c5c5';
            usernameok.style.display='block';
            bn1=true;
        }
    }

}
//密码验证
password.onfocus=function () {
    hidden2.style.display='block';
    waring2.style.display='none';
    password.setAttribute("placeholder","");
}
password.onblur=function () {
    hidden2.style.display='none';
    password.setAttribute("placeholder","至少使用两种字符组合");
    var reg= /^\w{6,15}$/;
    var passwordValue=password.value;
    //当输入不为空时判断输入是否正确
    if(passwordValue!==''){
        if(!reg.test(passwordValue)){
            waring2.style.display='block';
            document.getElementById('inputpassword').style.borderColor='red';
        }else{
            waring2.style.display='none';
            document.getElementById('inputpassword').style.borderColor='#c5c5c5';
            passwordok.style.display='block';
            bn2=true;
        }
    }
}
//重复密码验证
repassword.onfocus=function () {
    hidden3.style.display='block';
    waring3.style.display='none';
    repassword.setAttribute("placeholder","");
}
repassword.onblur=function () {
    hidden3.style.display='none';
    var passwordValue=password.value;
    var repasswordValue=repassword.value;
    repassword.setAttribute("placeholder","请再次输入密码");
    //当输入不为空时判断输入是否正确
    if(repasswordValue!==''){
        if(repasswordValue!==passwordValue){
            waring3.style.display='block';
            document.getElementById('inputrepassword').style.borderColor='red';
        }else{
            waring3.style.display='none';
            document.getElementById('inputrepassword').style.borderColor='#c5c5c5';
            // repasswordok.style.display='block';
            bn3=true;
        }
    }
}
//电话验证
tel.onfocus=function () {
    hidden4.style.display='block';
    waring4.style.display='none';
    tel.setAttribute("placeholder","");
}
tel.onblur=function () {
    hidden4.style.display='none';
    tel.setAttribute("placeholder","请输入常用手机");
    var reg= /^1[34578]\d{9}$/;
    var telValue=tel.value;

    //当输入不为空时判断输入是否正确
    if(telValue!==''){
        if(!reg.test(telValue)){
            waring4.style.display='block';
            document.getElementById('inputtel').style.borderColor='red';
        }else{
            waring4.style.display='none';
            document.getElementById('inputtel').style.borderColor='#c5c5c5';
            telok.style.display='block';
            bn4=true;
        }
    }
}
//验证码验证
randominput.onfocus=function () {
    hidden5.style.display='block';
    waring5.style.display='none';
    randominput.setAttribute("placeholder","");
}
randominput.onblur=function () {
    hidden5.style.display='none';
    randominput.setAttribute("placeholder","请输入验证码");
    var randomValue=randominput.value;
    //当输入不为空时判断输入是否正确
    var random=document.getElementById('random');
    var randomNew=random.innerText;
    if(randomValue!==''){
       if(randomNew!==randomValue){
           waring5.style.display='block';
           document.getElementById('inputrandom').style.borderColor='red';
       }else{
           waring5.style.display='none';
           document.getElementById('inputrandom').style.borderColor='#c5c5c5';
           randomok.style.display='block';
           bn5=true;
       }
    }
}

//提交表单判断
var submit=document.getElementById('submit');
submit.onclick=function () {
    if(username.value===''){
        waring1.style.display='block';
        waring2.style.display='block';
        waring3.style.display='block';
        waring4.style.display='block';
        waring5.style.display='block';
        return false;
    }else if(password.value===''){
        waring2.style.display='block';
        waring3.style.display='block';
        waring4.style.display='block';
        waring5.style.display='block';
        return false;
    } else if(repassword.value===''){
        waring3.style.display='block';
        waring4.style.display='block';
        waring5.style.display='block';
        return false;
    }else if(tel.value===''){
        waring4.style.display='block';
        waring5.style.display='block';
        return false;
    }else if(randominput.value===''){
        waring5.style.display='block';
        return false;
    }else if(!(bn1&&bn2&&bn3&&bn4&&bn5)){
        alert('注册消息输入有误');
        return false;
    } else{
        alert('注册成功！！！');
        return true;
    }

}
