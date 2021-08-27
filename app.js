const navSlide =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{ 
        // toggle class name of nav-links to nav-active
        nav.classList.toggle('nav-active')
    
        //animating links
    navLinks.forEach((link, index) => {
        if(link.style.animation)
        {
            link.style.animation=``
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
         }
         })
        //  on opening the side pan toggle the menu burger class with toggle class
    burger.classList.toggle('toggle')
    })

}

navSlide();

$(document).ready(function(){
    $('.Home').height($(window).height());
    $('.About').height($(window).height());
    $('.Contact').height($(window).height());

    
    
   })