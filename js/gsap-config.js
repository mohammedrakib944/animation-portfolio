gsap.registerPlugin(ScrollTrigger);

// gsap.to("#skillJs", {
//   y: 0,
//   opacity: 1,
//   scale: 1,
//   scrollTrigger: {
//     trigger: "#skillJs",
//     start: "30% 80%", // when we start the animation
//     end: "50% 70%", // when we end the animation
//     scrub: 1, // smoothness of the animation
//     markers: true,
//     // pin: true,
//     // pinSpacing: false,
//   },
// });

// Hero Section
gsap.to("#profile", {
  scale: 1,
  opacity: 1,
});

gsap.to("#bounce_text", {
  scale: 1,
  opacity: 1,
  delay: 1,
});

gsap.to("#about", {
  scale: 1,
  opacity: 1,
  delay: 0.5,
});

gsap.to("#hero_links", {
  scale: 1,
  opacity: 1,
  delay: 1.5,
});

// Projecet section
gsap.to("#blog_site", {
  y: 0,
  opacity: 1,
  delay: 0.1,
  scrollTrigger: {
    trigger: "#blog_site",
  },
});
gsap.to("#ecommerce", {
  y: 0,
  opacity: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#ecommerce",
  },
});
gsap.to("#instagram", {
  y: 0,
  opacity: 1,
  delay: 1.5,
  scrollTrigger: {
    trigger: "#instagram",
  },
});
gsap.to("#movie", {
  y: 0,
  opacity: 1,
  delay: 0.8,
  scrollTrigger: {
    trigger: "#movie",
  },
});
gsap.to("#todo", {
  y: 0,
  opacity: 1,
  delay: 1.2,
  scrollTrigger: {
    trigger: "#todo",
  },
});
