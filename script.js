const navBtn = document.getElementById('nav-toggle')
const openNav = document.getElementById('header-links')
const closeNav = document.getElementById('nav-close')
const overlay = document.querySelector('.overlay')

navBtn.addEventListener("click", () => {
    openNav.classList.add("show-links")
    overlay.classList.remove('hidden')
} )
closeNav.addEventListener("click", () => {
    openNav.classList.remove("show-links")
    overlay.classList.add('hidden')
} )