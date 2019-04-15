/*
  功能：实现盒子水平移动
  参数：
    element 要运动的元素 
    targetValue 目标值 数字
    speed 速度  数字
*/
function move(element, targetValue, speed) {
  // 清除旧的定时器,flag在此表示的是上一次定时器的标识
  clearInterval(element.flag);
  // 动画
  // 开启一个定时器（创建一个定时器）
  element.flag = setInterval(function () {
    // 获取盒子原有的位置
    var v = element.offsetLeft;
    // 判断是否到达目标
    if (v == targetValue) {
      // 停止定时器
      clearInterval(element.flag);
      // console.log('定时器还在执行...');
      // 向后不要执行了
      return;
    }
    // 更新变量的值
    // 检测最后一步和速度计算是否能够到达目标，若差值小于速度，则说明是最后一步，并且最后一步不能再去和speed计算
    if (Math.abs(targetValue - v) < speed) {
      element.style.left = targetValue + 'px';
    } else {
      if (targetValue > v) {
        v = v + speed;
      } else {
        v = v - speed;
      }
      // 重新设置盒子的left样式属性值
      element.style.left = v + 'px';
    }
  }, 10);
}
