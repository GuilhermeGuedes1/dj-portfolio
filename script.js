const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.querySelector('.overlay'); 

menuBtn.addEventListener('click', (event) => { 
    menu.classList.toggle('active');
    overlay.classList.toggle('active');  
})

 document.addEventListener("click", (event) => { 
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("active");
    }
}) 

document.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
        navbar.classList.add("side-nav");
    } else {
        navbar.classList.remove("side-nav");
    }
});

