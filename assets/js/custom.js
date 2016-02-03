var mainMenuBar = document.getElementById('mobile-main-menu');
var topMenuBar = document.getElementById('mobile-top-menu');

mainMenuBar.onclick = function () {
    document.getElementById('main-menu').classList.toggle('active');
};

topMenuBar.onclick = function () {
    document.getElementById('top-menu-link').classList.toggle('active');
};