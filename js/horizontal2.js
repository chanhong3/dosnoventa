//가로 스크롤
var $sections = document.querySelectorAll(".horizon_box");
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#shop",
        pin: true,
        scrub: 0.3,
        start: "top top",
        end: "+=300%",
    }
});
tl.from($sections, { x: '300%', duration: 1, ease: "none", stagger: 3 })
    .to($sections, { duration: 3 });
