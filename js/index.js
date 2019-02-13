let nav_btn = document.querySelector(".menu-btn");

let nav_links = document.querySelector(".nav-links");

nav_btn.addEventListener("click", function() {
  nav_links.classList.toggle("hide");
  nav_btn.classList.toggle("close");
});
