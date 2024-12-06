document.getElementById('hero-button').addEventListener('click', function () {
    var hero = document.getElementById('hero');
    var navbar = document.getElementById('navbar');
    var body = document.getElementById('body');
    var navItem = document.getElementById('nav-item');
    hero.classList.add('transition-height');
    hero.classList.remove('min-h-screen');
    hero.classList.add('h-0');
    body.classList.remove('lg:overflow-hidden');
    navItem.classList.remove('w-0');
    setTimeout(function () {
        hero.style.display = 'none';
        navbar.classList.remove('py-7');
        navbar.classList.add('py-5');
        navbar.classList.add('bg-slate-800');
        navbar.classList.remove('bg-gradient-to-b');
    }, 500); // Sesuaikan dengan durasi transisi
});

document.getElementById('title').addEventListener('click', function () {
    var hero = document.getElementById('hero');
    var navbar = document.getElementById('navbar');
    var body = document.getElementById('body');
    hero.style.display = 'flex';
    body.classList.add('overflow-hidden');
    setTimeout(function () {
        hero.classList.remove('h-0');
        hero.classList.add('h-screen');
    }, 10); // Timeout untuk memastikan transisi bekerja
    navbar.classList.add('py-7');
    navbar.classList.remove('py-5');
    navbar.classList.add('bg-gradient-to-b');
    navbar.classList.remove('bg-slate-800');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.querySelector('.chk');
    const badBg = document.getElementById('bad-bg');
    const goodBg = document.getElementById('good-bg');
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');

    switchElement.addEventListener('change', function () {
        if (switchElement.checked) {
            badBg.classList.add('hidden');
            goodBg.classList.remove('hidden');
            text1.classList.add('opacity-0');
            text2.classList.remove('opacity-0');
        } else {
            badBg.classList.remove('hidden');
            goodBg.classList.add('hidden');
            text2.classList.add('opacity-0');
            text1.classList.remove('opacity-0');
        }
    });
});

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
});