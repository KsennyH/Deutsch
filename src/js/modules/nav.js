const mobileNavBtn = document.querySelector('.js-mobile-btn');
const mobileNavBurger = document.querySelector('.js-mobile-burger');
const mobileNav = document.querySelector('.js-mobile-navigation');

module.exports = () => {
    mobileNavBtn.addEventListener('click', () => {
        mobileNavBurger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
}