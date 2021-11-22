// Hamburger
const burger = document.querySelector('nav .hamburger');
const menu = document.querySelector('nav ul');


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
