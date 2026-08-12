// 使用 DOMContentLoaded 确保 DOM 完全加载后再执行
document.addEventListener('DOMContentLoaded', function () {

    // ---------- 获取 DOM 元素 ----------
    const messageEl = document.getElementById('messageDisplay');
    const btn = document.getElementById('actionBtn');

    // ---------- 定义状态常量（方便统一修改文案） ----------
    const INITIAL_MESSAGE = '你好，欢迎访问这个牛逼网页。';
    const UPDATED_MESSAGE = '祝你玩的开心~';

    // ---------- 按钮点击处理函数 ----------
    function handleButtonClick() {
        // 1. 更新提示框内容
        messageEl.textContent = UPDATED_MESSAGE;

        // 2. 按钮消失：添加 hidden 类
        btn.classList.add('hidden');

        // 注意：不需要移除事件监听，因为按钮已经隐藏，不会再触发点击
        // 如果移除监听，按钮重新显示时还需要重新绑定，反而复杂
        // 保持监听存在但按钮隐藏，是最简单可靠的方式
    }

    // ---------- 绑定事件 ----------
    // 直接绑定点击事件，不进行多余的移除和重新绑定
    btn.addEventListener('click', handleButtonClick);

    // ---------- 初始化状态保障 ----------
    // 确保提示内容为初始文案
    messageEl.textContent = INITIAL_MESSAGE;

    // 确保按钮可见（移除可能存在的 hidden 类）
    btn.classList.remove('hidden');

    // 控制台输出，方便调试
    console.log('✨ 小提示框已准备就绪 ✨');
    console.log('💡 点击"好的"按钮测试功能');

});