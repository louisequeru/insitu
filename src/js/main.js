import gsap from "gsap";

const logo = document.querySelector(".logo");
const screen = document.querySelector(".screen");
if (logo) {
  const logoRect = logo.getBoundingClientRect();
  const screenRect = screen.getBoundingClientRect();
  const translateX = (logoRect.x - screenRect.x + 230) * -1;

  var tl = gsap.timeline({ repeat: -1 });
  tl.to(".logo", {
    x: translateX,
    y: -850,
    scale: 0.2,
    duration: 1.2,
    delay: 3.6,
    ease: "elastic.out(0.5,0.4)",
  });
  tl.to(".logo", {
    x: 0,
    y: 0,
    scale: 1,
    duration: 0,
    delay: 17,
  });
}

const event1 = document.querySelector(".event-1");
const event2 = document.querySelector(".event-2");
const event3 = document.querySelector(".event-3");
console.log(event1);

var tl = gsap.timeline({ repeat: -1 });
tl.to(event1, {
  opacity: 0,
  duration: 4.1,
});
tl.to(event1, {
  opacity: 1,
  duration: 0.3,
});
tl.to(event1, {
  opacity: 0,
  duration: 0.3,
  delay: 5,
});
tl.to(event2, {
  opacity: 1,
  duration: 0.3,
  delay: 0.7,
});
tl.to(event2, {
  opacity: 0,
  duration: 0.3,
  delay: 5,
});
tl.to(event3, {
  opacity: 1,
  duration: 0.3,
  delay: 0.7,
});
tl.to(event3, {
  opacity: 0,
  duration: 0.3,
  delay: 5,
});

const languages = document.querySelector(".language-container");

var tl = gsap.timeline({ repeat: -1 });
tl.to(".language-container", {
  opacity: 1,
  delay: 3.6,
});
tl.to(".language-container", {
  opacity: 0,
  delay: 18,
});

const callToAction = document.querySelector(".main-call-to-action");

var tl = gsap.timeline({ repeat: -1 });
tl.to(".main-call-to-action", {
  opacity: 1,
  delay: 3.6,
});
tl.to(".main-call-to-action", {
  opacity: 0,
  delay: 18,
});

const qrCode = document.querySelector(".qrcode-container");

var tl = gsap.timeline({ repeat: -1 });
tl.to(".qrcode-container", {
  opacity: 1,
  delay: 3.6,
});
tl.to(".qrcode-container", {
  opacity: 0,
  delay: 18,
});

const buttons = document.querySelectorAll(".language-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    console.log("Langue sélectionnée :", btn.dataset.lang);
  });
});
