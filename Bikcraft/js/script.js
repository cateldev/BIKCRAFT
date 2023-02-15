//Menu Link Activation

const links = document.querySelectorAll(".header-menu a");

function linkActivation(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(linkActivation);

// Frequently Asked Questions Box Expand

const buttonExpand = document.querySelectorAll(".faq button");

function activeExpand(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);

  response.classList.toggle("active");
  const active = question.classList.contains("active");
  question.setAtribute("aria-expanded", active);
}

function expandEvent(question) {
  question.addEventListener("click", activeExpand);
}

buttonExpand.forEach(expandEvent);

// Gallery Image Swap

const gallery = document.querySelectorAll(".bikes-images img");
const galleryContainer = document.querySelector(".bike-images");

function imageSwap(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function galleryEvent(img) {
  img.addEventListener("click", imageSwap);
}

// Animation Plugin

new SimpleAnime();
