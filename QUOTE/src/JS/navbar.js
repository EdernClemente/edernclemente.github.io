/*==================== SHOW NAVBAR ====================*/

// Permet d'afficher le menu de navigation à gauche
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId),
    icon = document.querySelector('#header-toggle path')

    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', () => {
            if(nav.classList.contains('show-menu')) {
                nav.classList.remove('show-menu')
                icon.style.d = "path('M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z')"
            } else {
                nav.classList.add('show-menu')
                icon.style.d = "path('M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z')"
            }
        })
    }
}
showMenu('header-toggle','navbar')