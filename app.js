// ScrollReveal({
//     distance : '20px', //80
//     duration : 2000,
//     delay: 200,
// })


// ScrollReveal().reveal('.home-content, heading', { origin : 'top'});
// ScrollReveal().reveal('.home-img, .service-container, .portfolio-box , .contact form', { origin : 'button'});
// ScrollReveal().reveal('.home-content h1, .about-img', { origin : 'left'});
// ScrollReveal().reveal('.home-content p , .about-content', { origin : 'right'});
// ScrollReveal().reveal('.aboutus h1 ', { origin : 'top'});
// ScrollReveal().reveal('.box1 ', { origin : 'left'});
// ScrollReveal().reveal('.box2 ', { origin : 'right'});
// ScrollReveal().reveal('.obj-main h2 ', { origin : 'bottom'});
// ScrollReveal().reveal('.obj-main div ', { origin : 'right'});
// ScrollReveal().reveal('.tech h2 ', { origin : 'right'});
// ScrollReveal().reveal(' .tech-container ', { origin : 'left'});
// ScrollReveal().reveal('#first, #sec ', { origin : 'left'});
// ScrollReveal().reveal('#third ,#fourth', { origin : 'right'});
// ScrollReveal().reveal('.team h2 ', { origin : 'bottom'});
// ScrollReveal().reveal('.upcomming-event-class h2', { origin : 'bottom'});
// ScrollReveal().reveal('#upfi', { origin : 'left'});
// ScrollReveal().reveal('#upsec', { origin : 'right'});

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".hamburger-menu").style.top="5px";
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".hamburger-menu").style.top="-430px";
})
