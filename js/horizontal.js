gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#wrap");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
    let pinBoxes = document.querySelectorAll(".scroll-content > *");
    let pinWrap = document.querySelector(".scroll-content");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

gsap.to(".scroll-content", {
        scrollTrigger: {
        scroller: pageContainer, //locomotive-scroll
        scrub: true,
        trigger: "#sectionPin",
        pin: true,
        // anticipatePin: 1,
        start: "top top",
        end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});