const menu = document.querySelector('.menu')
const menulist = document.querySelector('.nav')
menu.addEventListener('click', () => {
    menulist.classList.toggle('showmenu')
})