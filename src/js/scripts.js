const hamburger = document.querySelector(".hamburger")
const header_menu = document.querySelector(".nav .ulwrap")

hamburger.onclick = nav_toggle
document.querySelectorAll('.nav ul a').forEach(function (a) {
    a.onclick = nav_toggle
})
document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
        nav_close()
    }
})

function nav_toggle() {
    hamburger.classList.toggle("header_hamburger")
    header_menu.classList.toggle("menu_header")
    document.body.classList.toggle("bodyblock")
}
function nav_close() {
    hamburger.classList.remove("header_hamburger")
    header_menu.classList.remove("menu_header")
    document.body.classList.remove("bodyblock")
}