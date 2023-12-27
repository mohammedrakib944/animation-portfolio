let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#skillJs",
    start: "30% 80%", // when we start the animation
    end: "50% 50%", // when we end the animation
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
