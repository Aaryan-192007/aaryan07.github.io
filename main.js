import vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";

var typed = new Typed('.auto-type', {
    strings: [" Programmer", "Web Developer", "Game Developer","Roboticist","Student",],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

const card = document.querySelector("#card");
VanillaTilt.init(card, {
  max: 10,
  speed: 1000,
  perspective: 700
});



