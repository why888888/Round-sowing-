// 核心思路：
// 动画动的元素是 content
// 获取展示轮播图的区域的宽度  （720）
// 定义要给变量index，表示当前显示的是哪个轮播项  0  

// 获取元素
// 右侧按钮
var btnRight = document.querySelector('.btn-right');
// 左侧按钮
var btnLeft = document.querySelector('.btn-left');
// 展示轮播项的可视区容器
var bannerCenter = document.querySelector('#bannerCenter');
// 代表所有轮播项的容器 content
var content = document.querySelector('.content');
// 一组li
var lis = document.querySelectorAll('.controls li');
// 代表一组li的父元素ul 
var controls = document.querySelector('.controls');
//定义索引展示图片 默认为0
var index = 0;
//获取可是窗口的大小
var width = bannerCenter.offsetWidth;
var cwidth = content.offsetWidth;
var cha = cwidth - width;
// 功能1： 点击右侧按钮实现下一项轮播
// 1. 给右侧按钮注册onclick
btnRight.onclick = function () {
    if (index == 0) {
        content.style.left = '0px';
    }
    lis[index].className = '';
    index++;
    var iw = index * -width;
    move(content, iw, 20);
    if (index > 3) {
        index = 0;
    }
    lis[index].className = 'active';
};
// 功能2： 点击左侧按钮实现上一项轮播
btnLeft.onclick = function () {
    lis[index].className = '';
    index--;
    if (index < 0) {
        content.style.left = -cha + 'px';
        index = 3;
    }
    var iw = index * -width;
    move(content, iw, 20);
    lis[index].className = 'active';
};
// 功能2： 点击小点点按钮实现轮播
for (var i = 0; i < lis.length; i++) {
    //分配编号
    lis[i].index = i;
    //注册事件
    controls.onclick = function (e) {
        if(e.target.nodeName='LI'){
            for (var j = 0; j < lis.length; j++) {
                if (lis[j].className == 'active') {
                    lis[j].className = '';
                }
            }
            e.target.className = 'active';
            index = lis[e.target.index].index;
            var iw = index * -width;
            move(content, iw, 40);
        }
    };
};
var setI;
setI = setInterval(function () {
    btnRight.onclick();
}, 2500);
bannerCenter.onmouseenter = function () {
    clearInterval(setI);
};
bannerCenter.onmouseleave = function () {
    setI = setInterval(function () {
        btnRight.onclick();
    }, 2500);
};