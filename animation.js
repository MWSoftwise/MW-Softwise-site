// Hamburger
const burger = document.querySelector('nav .hamburger');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li')


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        burger.classList.remove('active');
        menu.classList.remove('active')
    })
})

// MENU SCROLLING

$('nav ul li a').on("click", function () {
    const scrolling = "#" + $(this).attr('data-menu');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top - 80
    })
})
$('nav aside').on("click", function () {
    const scrolling = "#" + $(this).attr('class');

    $('body, html').animate({
        scrollTop: $(scrolling).offset().top
    })
})

// ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

const fromTop = document.querySelectorAll('.animateTop');



fromTop.forEach(item =>{
    gsap.fromTo(item.children, {y:'+=100',opacity: 0}, {y: 0, opacity: 1, stagger: 0.3, duration:1, ease:'easeInOut', scrollTrigger:{
        trigger: item,
        start: 'top 53%'
    }});
});