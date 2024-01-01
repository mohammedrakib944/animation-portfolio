gsap.registerPlugin(ScrollTrigger);
let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#skillJs",
    start: "30% 80%", // when we start the animation
    end: "50% 70%", // when we end the animation
    scrub: 1, // smoothness of the animation
    markers: true,
    // pin: true,
    // pinSpacing: false,
  },
});

t1.to("#skillJs", {
  // x: 200,
  opacity: 1,
  scale: 1,
});

gsap.to("#profile", {
  scale: 1,
  opacity: 1,
});

gsap.to("#bounce_text", {
  scale: 1,
  opacity: 1,
  delay: 0.3,
});

gsap.to("#about", {
  scale: 1,
  opacity: 1,
  delay: 0.6,
});

gsap.to("#hero_links", {
  scale: 1,
  opacity: 1,
  delay: 0.9,
});
