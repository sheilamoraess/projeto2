gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
    end: "+=3000"
  }
});

gsap.set(".box-1, .box-2", { y: 100 });

ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

// red section
gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset",
    id: "1",
  }
});

// gray section
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "2"
  }
});

// purple section
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3"
});

// green section
ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive),
  id: "4"
});
