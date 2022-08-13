const menuBar = document.querySelector(".mbar");
const menuNav = document.querySelector(".mnav");

menuBar.addEventListener('click', function() {
	menuNav.classList.toggle("menu-active");
})