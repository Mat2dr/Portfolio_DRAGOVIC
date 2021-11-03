let controller;
let slideScene;

function animateNav() {
    controller = new ScrollMagic.Controller();
    const nav = document.querySelector('.navbar');

    const navTl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" }
    });
    navTl.fromTo(nav, { y: '-100%' }, { y: '0%' } );
};

function animateProject() {
    //init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const projects = document.querySelectorAll('.portfolio__project');
    //loop over each project
    projects.forEach(project =>{
        const revealImg = project.querySelector(".reveal-img");
        const img = project.querySelector('img');
        //GSAP
        const mainTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" }
        });
        mainTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
        mainTl.fromTo(revealImg, { x: '0%' }, { x: '100%' }, "-=0.75");
    });
};

animateNav();
animateProject();