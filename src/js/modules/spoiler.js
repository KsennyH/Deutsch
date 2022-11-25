const spoilers = document.querySelectorAll("[data-name='spoiler']");

module.exports = () => {
    spoilers.forEach(el => {
        el.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show');
        });
    });
}