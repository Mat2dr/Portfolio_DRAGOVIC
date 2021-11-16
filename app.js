
let controller;
let aboutScene;
let projectScene;
let testimonialScene;
let faqScene;
let contactScene;

const mouse = document.querySelector('.cursor');

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}
function activeCursor(e) {
    const item = e.target;

    if (item.id === "logo"  || item.classList.contains("burger")) {
        mouse.classList.add('nav-active');
    } else {
        mouse.classList.remove('nav-active');
    }
    if (item.classList.contains("btn")) {
        mouse.classList.add("btn-active");
    } else {
        mouse.classList.remove("btn-active");
    }
}

function animateHead() {

    const nav = document.querySelector('.navbar');
    const img = document.querySelector('img');
    const revealImg = document.querySelector(".reveal-img");
    const title = document.querySelector('.hero__img__text');
    const smalltitle = document.querySelector('.hero__titre');


    const navTl = gsap.timeline({
        defaults: { duration: 2, ease: "power2.inOut" }
    });
    navTl.fromTo(nav, { y: '-100%' }, { y: '0%' }, "=1");
    navTl.fromTo(img, {opacity: 0}, { opacity: 1}, "-=1.5");
    navTl.fromTo(title, {opacity: 0}, { opacity: 1}, "-=1.5");
    navTl.fromTo(smalltitle, {opacity: 0}, { opacity: 1}, "-=1.5");
    navTl.fromTo(revealImg, { x: '0%' }, { x: '100%' }, "-=0.5");
};

function animateCall() {
    const revealTextCall = document.querySelector(".reveal-text-call");

    const callTl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" }
    });
    callTl.fromTo(revealTextCall, {opacity: 1}, { opacity: 0}, "=2.5");
    callTl.fromTo(revealTextCall, { x: '0%' }, { x: '100%' }, "-=0.75");
};

function animateAbout() {
    //init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const about = document.querySelectorAll('.about');
    const aboutTl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" }
    });
    aboutTl.fromTo(about, {opacity: 0}, { opacity: 1});
    //create Scene
    aboutScene = new ScrollMagic.Scene({
        triggerElement: about,
        triggerHook: 0.60,
        reverse: false
    })
        .setTween(aboutTl)
    .addTo(controller);
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
        const revealText = project.querySelector(".reveal-text");
        const btn = project.querySelectorAll(".btn");
        //GSAP
        const mainTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" }
        });
        mainTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
        mainTl.fromTo(revealText, { x: '0%' }, { x: '100%' }, "-=1");
        mainTl.fromTo(revealImg, { x: '0%' }, { x: '100%' }, "-=0.75");
        mainTl.fromTo(btn, {opacity: 0}, { opacity: 1}, "-=0.75");
        //create Scene
        projectScene = new ScrollMagic.Scene({
            triggerElement: project,
            triggerHook: 0.60,
            reverse: false
        })
            .setTween(mainTl)
        .addTo(controller);
    });
};

function animateTestimonial() {
    //init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const testimonial = document.querySelectorAll('.testimonial-text');
    const testimonialTl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" }
    });
    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function() {
            testimonialTl.fromTo(testimonial, {opacity: 0}, { opacity: 1}, "-=0.75");
            //create Scene
            aboutScene = new ScrollMagic.Scene({
                triggerElement: testimonial,
                triggerHook: 0.60,
                reverse: false
            })
                .setTween(testimonialTl)
            .addTo(controller);
        }
    });
};


function animateFaq() {
    //init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const faq = document.querySelectorAll('.faq');
    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function() {
            const faqTl = gsap.timeline({
                defaults: { duration: 1, ease: "power2.inOut" }
            });
            faqTl.fromTo(faq, {opacity: 0}, { opacity: 1}, "-=0.8");
            //create Scene
            faqScene = new ScrollMagic.Scene({
                triggerElement: faq,
                triggerHook: 0.50,
                reverse: false
            })
                .setTween(faqTl)
            .addTo(controller);
        }
    });
};

function openQuestion() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            question.classList.toggle("active");
        });
    });
};


function animateContact() {
    //init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const contact = document.querySelectorAll('.contacter');
    ScrollTrigger.matchMedia({
        "(min-width: 800px)": function() {
            const contactTl = gsap.timeline({
                defaults: { duration: 1, ease: "power2.inOut" }
            });
            contactTl.fromTo(contact, {opacity: 0}, { opacity: 1}, "-=0.75");
            //create Scene
            contactScene = new ScrollMagic.Scene({
                triggerElement: contact,
                triggerHook: 0.90,
                reverse: false
            })
                .setTween(contactTl)
            .addTo(controller);
        }
    });
};


window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

animateHead();

animateCall();

animateAbout();

animateProject();

animateTestimonial();

animateFaq();
openQuestion();

animateContact();






//Barba Page Transitions
const logo = document.querySelector(".navbar__logo");
barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        logo.href = "./index.html";  
        animateHead();
        animateCall();
        animateAbout();
        animateProject();
        animateTestimonial();
        animateFaq();
        animateContact();
      },
      beforeLeave() {
      }
    },
    {
      namespace: "projects",
      beforeEnter() {
        logo.href = "../index.html";
        animateHead();
        animateCall();
        animateAbout();
        animateProject();
        animateTestimonial();
        animateFaq();
        animateContact();
      },
      beforeLeave() {
      }
    }
  ],
  transitions: [
    {
      leave({ current, next }) {
        let done = this.async();
        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
        tl.fromTo(
          ".swipe",
          0.75,
          { x: "-100%" },
          { x: "0%", onComplete: done },
          "-=0.5"
        );
      },
      enter({ current, next }) {
        let done = this.async();
        //Scroll to the top
        window.scrollTo(0, 0);
        //An Animation
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(
          ".swipe",
          1,
          { x: "0%" },

          { x: "100%", stagger: 0.2, onComplete: done }
        );
        tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
        tl.fromTo(
          ".nav-header",
          1,
          { y: "-100%" },
          { y: "0%", ease: "power2.inOut" },
          "-=1.5"
        );
      } 
    }
  ]
});