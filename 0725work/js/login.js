var bg = document.getElementsByClassName('left');
var a = new Array('url(./image/pic1.png)', 'url(./image/pic2.png)', 'url(./image/pic3.png)');
var list = document.getElementById('desc').getElementsByTagName('li');
var i = 0;

var nextMove = function () {
    i += 1;
    if (i >= list.length) {
        i = 0;
    }
    bg[0].style.backgroundImage = a[i];
    list[i].style.background = '#fff';
    for (var j = 0; j < 3; j++) {
        if (j != i) {
            list[j].style.background = '#555';
        }
    }
};
setInterval(nextMove, 3000);

var loginTest = function () {
    var user = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;
    console.log(pwd.length);
    if((user != "") && (pwd.length >= 6)) {
        alert("登录成功，你好 " + user);
    }
    else {
        alert("登录失败，用户名不能为空且密码不能少于6位数");
    }
}