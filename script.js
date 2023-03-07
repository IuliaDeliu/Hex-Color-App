const colorBox = document.getElementById('color');
const text = document.querySelector('.box textarea');
const btn = document.querySelector('button');

colorBox.addEventListener('input', function () {
    const colorVal = colorBox.value;
    text.value = colorVal;
    btn.style.background = colorVal;
})

btn.addEventListener('click', function () {
    text.select();
    document.execCommand('copy');

    setTimeout(() => {
        window.getSelection().removeAllRanges();
    }, 500);
})