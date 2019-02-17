//Services Tabs
class TabLinks {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabs = document.querySelectorAll(".link");

    let tabText = document.querySelector(".tab-text");
    this.h2 = tabText.querySelector("h2");

    this.itemElement = document.querySelector(`.timg[data-tab="${this.data}"]`);
    this.item = new TabItem(this.itemElement);

    this.element.addEventListener("click", this.select.bind(this));
  }
  select() {
    this.tabs.forEach(el => el.classList.remove("active-tab"));
    this.element.classList.add("active-tab");
    this.h2.innerHTML = this.element.innerHTML;
    this.item.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    let items = document.querySelectorAll(".timg");
    items.forEach(item => item.classList.remove("img-active"));
    this.element.classList.add("img-active");
  }
}

let tabs = document.querySelector(".tab-links");
tabs.querySelectorAll(".link").forEach(tab => (tab = new TabLinks(tab)));
