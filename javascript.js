/* Dropdown menu */
const dropdown_menu = document.querySelector('.dropdown-menu')
const nav_item = document.querySelector('.nav-item')

nav_item.addEventListener('click', (e)=> {

    dropdown_menu.classList.toggle('show')
    e.stopPropagation()
})

document.addEventListener('click', (e)=> {
    if(e.target.closest('.dropdown-menu')) return

    dropdown_menu.classList.add('show')

})