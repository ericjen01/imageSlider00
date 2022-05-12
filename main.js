const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
console.log(carouselImages);

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
console.log(carouselImages.length);
const size = carouselImages[counter].clientWidth;
moveSlides(counter);

nextBtn.addEventListener("click", () => {
  setTransition("0.5s");
  counter++;
  console.log(counter);
  moveSlides(counter);
  if (counter >= carouselImages.length - 1) {
    endReset();
  }
});

prevBtn.addEventListener("click", () => {
  setTransition("0.5s");
  counter--;
  moveSlides(counter);
  if (counter <= 0) {
    frontReset();
  }
});

function endReset() {
  setTransition("0.001s");
  counter = 0;
  moveSlides(counter);
  carouselSlide.addEventListener("webkitTransitionEnd", () => {
    if (counter == 0) {
      setTransition("0.5s");
      counter++;
      moveSlides(counter);
    }
  });
}

function frontReset() {
  setTransition("0.001s");
  counter = carouselImages.length - 1;
  moveSlides(counter);
  carouselSlide.addEventListener("webkitTransitionEnd", () => {
    if (counter == carouselImages.length - 1) {
      setTransition("0.5s");
      counter--;
      moveSlides(counter);
    }
  });
}

function setTransition(timeSpan) {
  carouselSlide.style.transition = "transform " + timeSpan + " ease-in-out";
}

function moveSlides(counter) {
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}
