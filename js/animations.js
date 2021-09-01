gsap
.timeline()
.from('.navbar', {
  opacity:0
})
.to('.navbar', {
  duration: 0.9,
  opacity:1,
  scale: 1,
});

gsap
.timeline()
.from('.about-text-content', {
  x: -200,
  opacity:0
})
.to('.about-text-content', {
  duration: 0.6,
  x: 0,
  opacity:1,
  scale: 1,
});

gsap
.timeline()
.from('.about-image-content', {
  x: 200,
  opacity:0
})
.to('.about-image-content', {
  duration: 0.6,
  x: 0,
  opacity:1,
  scale: 1,
});

gsap
.timeline({
  defaults: {
    duration: 0.2
  },
  scrollTrigger: {
    trigger: ".mission-text-content",
    start: "top center",
    end: "70 center",
    toggleActions: "play reverse play reverse",
    scrub: 1
  }
})
.from(".mission-image", {
  x: -200,
  opacity: 0
})
.from(
  ".mission-text",
  {
    x: 200,
    opacity: 0
  },
  0
);

gsap
.timeline({
  defaults: {
    duration: 0.2
  },
  scrollTrigger: {
    trigger: ".upcoming-events",
    start: "top center",
    end: "70 center",
    toggleActions: "play reverse play reverse",
    scrub: 1,
  }
})
.from(
  ".upcoming-events-image",
  {
    opacity: 0,
    duration:0.9
  },
);
