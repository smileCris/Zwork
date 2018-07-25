let leftBg = document.getElementsByClassName('left');
let array = new Array('url(./image/pic1.png)', 'url(./image/pic2.png)', 'url(./image/pic3.png)');
let list = document.getElementById('desc').getElementsByTagName('li');

let nextMove = function () {
    let i = 0;
    i += 1;
    if (i >= list.length) {
        i = 0;
    }
    leftBg[0].style.backgroundImage = array[i];
    list[i].style.background = '#fff';
    for (let j = 0; j < 3; j++) {
        if (j != i) {
            list[j].style.background = '#555';
        }
    }
};
setInterval(nextMove, 3000);

let loginTest = function () {
    const user = document.getElementById('username').value;
    const pwd = document.getElementById('password').value;
    const alertP = document.getElementById('alert');
    alertP.style.display = 'block';
    if ((user != "") && (pwd.length >= 6)) {
        alertP.innerHTML = `登录成功，你好 ${user}`;
    } else {
        alertP.innerHTML = `登录失败，用户名不能为空且密码不能少于6位数`;
    }
}
