const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
console.log(images.length);
const size = images[counter].clientWidth;
moveSlides(counter);

nextBtn.addEventListener("click", () => {
  setTransition("0.5s");
  counter++;
  console.log(counter);
  moveSlides(counter);
  if (counter >= images.length - 1) {
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
  slide.addEventListener("webkitTransitionEnd", () => {
    if (counter == 0) {
      setTransition("0.5s");
      counter++;
      moveSlides(counter);
    }
  });
}

function frontReset() {
  setTransition("0.001s");
  counter = images.length - 1;
  moveSlides(counter);
  slide.addEventListener("webkitTransitionEnd", () => {
    if (counter == images.length - 1) {
      setTransition("0.5s");
      counter--;
      moveSlides(counter);
    }
  });
}

function setTransition(timeSpan) {
  slide.style.transition = "transform " + timeSpan + " ease-in-out";
}

function moveSlides(counter) {
  slide.style.transform = "translateX(" + -size * counter + "px)";
}
