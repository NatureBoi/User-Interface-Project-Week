class Slider {
  constructor(element) {
    this.counter = 0;
    this.element = element;
    this.next_btn = this.element.querySelector(".next");
    this.prev_btn = this.element.querySelector(".prev");
    this.numbers = this.element.querySelectorAll(".numbertext");
    this.slides = [...this.element.getElementsByClassName("slide-image")];

    this.slides[this.counter].style.display = "block";
    this.numbers.forEach(
      (number, i) => (number.innerHTML = `${i + 1} / ${this.slides.length}`)
    );

    this.next_btn.addEventListener("click", this.next.bind(this));
    this.prev_btn.addEventListener("click", this.prev.bind(this));

    //Creating Dots
    this.dot_container = this.element.querySelector(".dot-container");
    let dotspan;
    for (let i = 0; i < this.slides.length; i++) {
      dotspan = document.createElement("span");
      dotspan.setAttribute("class", "dot");
      dotspan.setAttribute("data-tab", `${i}`);
      this.dot_container.appendChild(dotspan);
    }
    this.dots = [...this.element.getElementsByClassName("dot")];
    this.dot_element = this.dots.map(dot => (dot = new Dot(dot)));
  }
  next() {
    this.counter++;
    if (this.counter > this.slides.length - 1) {
      this.counter = 0;
    }
    this.select();
    this.dot_element[this.counter].select();
    this.counter = this.dot_element[this.counter].data;
  }
  prev() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.slides.length - 1;
    }
    this.select();
    this.dot_element[this.counter].select();
    this.counter = this.dot_element[this.counter].data;
  }
  select() {
    this.slides.forEach(slide => (slide.style.display = "none"));
    this.slides[this.counter].style.display = "block";
  }
}

class Dot {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.element.addEventListener("click", this.select.bind(this));
    this.slides = [...document.getElementsByClassName("slide-image")];
    this.dots = [...document.getElementsByClassName("dot")];
  }
  select() {
    this.slides.forEach(slide => (slide.style.display = "none"));
    this.slides[this.data].style.display = "block";
    this.dots.forEach(dot => dot.classList.remove("active"));
    this.element.classList.add("active");
  }
}

let slider = document.querySelector(".slider");
slider = new Slider(slider);
