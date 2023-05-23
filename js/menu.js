const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.menu')
const list = document.querySelectorAll('.menu-link')

openMenu.addEventListener("click",()=>{
    menu.classList.add('menu_visible');
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
})

function cerrarMenu() {
    menu.classList.remove('menu_visible');
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
}

closeMenu.addEventListener("click",()=>{
    cerrarMenu();
})

list.forEach(e =>{
    e.addEventListener("click", ()=>{
        cerrarMenu();
    })
})

