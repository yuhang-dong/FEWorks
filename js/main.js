/*
1. 自动切换
2. 点击手动切换
3. prev next
 */
'use strict';


let scroll = {
    currentIndex: 0,
    changeTime: 5 * 1000,
    scrollDiv: document.getElementById('scroll_pic'),
    active(index) {
        this.scrollPics[this.currentIndex].removeAttribute("class");
        this.scrollPots[this.currentIndex].removeAttribute("class");
        this.scrollPics[index].setAttribute("class", "active");
        this.scrollPots[index].setAttribute("class", "pot_active");
        this.currentIndex = index;
    },
}

/**
 * 更换轮播图操作
 * @param index  需要保证index不超过最大值
 */
function loopChange() {
    scroll.active((scroll.currentIndex + 1) % scroll.maxSize);
}

function change(index) {
    // 重置起始位置
    scroll.interval && clearInterval(scroll.interval);
    scroll.active(index);
    scroll.interval = setInterval(loopChange, scroll.changeTime);
}

+function() {
    // 自动切换

    scroll.scrollPics = scroll.scrollDiv.getElementsByTagName('a');
    scroll.scrollPots = scroll.scrollDiv.getElementsByTagName('li');
    scroll.maxSize = scroll.scrollPics.length;
    scroll.interval = setInterval(loopChange, scroll.changeTime);
    // 添加点击pot切换事件
    for(let i = 0; i < scroll.scrollPics.length; i++) {
        scroll.scrollPots[i].addEventListener('click', function (e) {
            change(i);
        } )
    }

}()