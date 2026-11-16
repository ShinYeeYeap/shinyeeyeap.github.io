/* MENU */

const menuButton = document.getElementById("menu_button");
const menuClose = document.getElementById("menu_close");
const mobileMenu = document.getElementById("mobile_menu");


/* Open menu */
function openMenu() {
    mobileMenu.classList.add("active");
    document.body.classList.add("menu_open");

    menuButton.setAttribute("aria-expanded", "true");
    menuClose.focus();
}


/* Close menu */
function closeMenu() {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("menu_open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
}


menuButton.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);


/* Escape key */
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" &&
        mobileMenu.classList.contains("active")) {
        closeMenu();
    }
});


/* Reset when changing to desktop */
window.addEventListener("resize", function () {
    if (window.innerWidth > 1279 &&
        mobileMenu.classList.contains("active")) {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu_open");
        menuButton.setAttribute("aria-expanded", "false");
    }
});