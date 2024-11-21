document.addEventListener('DOMContentLoaded', function() {
    const quienesSomosLink = document.querySelector('nav ul li a[href="#quienes-somos"]');
    
    if (quienesSomosLink) {
        quienesSomosLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'quienes-somos.html';
        });
    }
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}