document.getElementById('burger').onclick = function () {
    document.getElementById('navigation').classList.add('open')
}

document.querySelectorAll('#navigation *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('navigation').classList.remove('open');
    }
})