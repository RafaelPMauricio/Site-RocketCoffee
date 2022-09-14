
let menuButton = document.getElementById('imageMenu')
let main = document.getElementById('content')
let menu = document.getElementById('burguerMenu')
let menuOpen = false

window.onresize = function () {
    if(window.innerWidth > 791){
        menuButton.setAttribute('src', 'assets/menu-buguer-open.svg')
        main.style.display = 'flex'
        menu.style.display = 'none'
    } else if(window.innerWidth <= 791 && menuOpen) {
        menuButton.setAttribute('src', 'assets/menu-buguer-close.svg')
        main.style.display = 'none'
        menu.style.display = 'flex'
    }
}

function burguerMenu(){
    menuOpen = !menuOpen
    if (!menuOpen){
        menuButton.setAttribute('src', 'assets/menu-buguer-open.svg')
        main.style.display = 'flex'
        menu.style.display = 'none'
    }
    else if(menuOpen){
        menuButton.setAttribute('src', 'assets/menu-buguer-close.svg')
        main.style.display = 'none'
        menu.style.display = 'flex'
    }
}