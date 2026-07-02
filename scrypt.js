/*=========================================
    TACOS 420
    JavaScript
=========================================*/

//==========================
// MENU HAMBURGUESA
//==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

//==========================
// CERRAR MENU AL DAR CLIC
//==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

//==========================
// HEADER AL HACER SCROLL
//==========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

//==========================
// BOTON VOLVER ARRIBA
//==========================

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        toTop.classList.add("active");

    }else{

        toTop.classList.remove("active");

    }

});

//==========================
// ANIMACIONES AL HACER SCROLL
//==========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.20
});

document.querySelectorAll(

".card, .menu-image img, .logo-container img, .social, .contact-box"

).forEach(element=>{

    observer.observe(element);

});