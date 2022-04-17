const menu = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

menu.addEventListener('click', function(){
    links.classList.toggle("show-links");
})