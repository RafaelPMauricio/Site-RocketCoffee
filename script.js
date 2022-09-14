/* variáveis para os elementos a serem modificados */
let menuButton = document.getElementById('imageMenu')
let main = document.getElementById('content')
let menu = document.getElementById('burguerMenu')
let menuOpen = false

/* função para verificar se houve uma mudança de layout */
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

/* função para abrir e fechar o menu mobile/telas pequenas */
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