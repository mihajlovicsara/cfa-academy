
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// ccarousel for reviews
const faqBoxes = document.querySelectorAll('.faq-box');

faqBoxes.forEach(box => {
    box.addEventListener('click', () => {

        faqBoxes.forEach(item => {
            if(item !== box){
                item.classList.remove('active');
            }
        });

        box.classList.toggle('active');
    });
});