const menu = document.querySelector(".bars__menu");
const nav = document.querySelector(".nav");

/* Inicio lógica de la aniación del menu */

menu.addEventListener("click", animateBars);

const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
  nav.classList.toggle("active");
}

/* Final lógica de la aniación del menu */

/* Inicio lógica del acordeón */

const faq_header = document.querySelectorAll(".faq__header");
const faq_body = document.querySelectorAll(".faq__body");
const arrow = document.querySelectorAll(".bxs-right-arrow");
const h3 = document.querySelectorAll(".faq_h3");

faq_header.forEach((cadaHeader, i) => {
  faq_header[i].addEventListener("click", () => {
    faq_body.forEach((cadaBloque, i) => {
      faq_body[i].classList.remove("active");
    });
    arrow.forEach((cadaArrow, i) => {
      arrow[i].classList.remove("active");
    });
    h3.forEach((cadaH3, i) => {
      h3[i].classList.remove("active");
    });
    faq_body[i].classList.add("active");
    arrow[i].classList.add("active");
    h3[i].classList.add("active");
  });
});

/* Fin de la lógica del acordeón */

/* Inicio lógica del contador */
const counters = document.querySelector(".section__counter");

const numbers = document.querySelectorAll(".counter__number");
numbers.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };
  updateCounter();
});
