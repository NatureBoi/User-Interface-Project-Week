let nav_btn = document.querySelector(".menu-btn");

let nav_links = document.querySelector(".nav-links");

nav_btn.addEventListener("click", function() {
  nav_links.classList.toggle("hide");
  TweenMax.staggerFrom("a", 0.2, { opacity: 0, scale: 0.5, x: 80 }, 0.2);
  nav_btn.classList.toggle("close");
});

// Animations
let ft_btn = document.querySelector(".ft-btn");

ft_btn.addEventListener("click", () => {
  TweenLite.from(ft_btn, 1, { boxShadow: "#333 2px 2px 20px" });
});

let h2 = document.querySelector(".jumbo");
TweenMax.staggerFrom("h2", 0.2, { opacity: 0, scale: 0.5, x: 80 }, 0.2);
