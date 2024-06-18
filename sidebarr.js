document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.aside');
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.aside .close');

    menuButton.addEventListener('click', () => {
        sidebar.style.left = '0';
    });

    closeButton.addEventListener('click', () => {
        sidebar.style.left = '-100%';
    });
});
