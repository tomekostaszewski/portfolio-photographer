const navBtn = document.querySelector('.bars-btn');
const nav = document.querySelector('.nav-container');
const items = document.querySelectorAll('.item');
const navTop = document.querySelector('nav');

const openNav = () => {
    nav.classList.toggle('active')

    items.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    })
}
navBtn.addEventListener('click', openNav);


const fixedNav = () => {
    if (window.scrollY >= 10) {
        navTop.classList.add('fixNav');
    } else {
        navTop.classList.remove('fixNav')
    }
}
window.addEventListener('scroll', fixedNav);

