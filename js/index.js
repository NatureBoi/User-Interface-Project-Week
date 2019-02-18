let down_btn = document.querySelector(".bg-arrow");
console.log(down_btn);
TweenLite.set(down_btn, { y: "-=15", opacity: 1 });

//now let's animate the clouds
let bg_btn = new TimelineMax({ repeat: -1 });
// fade opacity to 1
bg_btn
  .to(down_btn, 0.5, { opacity: 1 })
  .to(down_btn, 0.5 + Math.random() * 2, { y: 0, ease: Linear.easeNone }, 0)
  .to(down_btn, 0.5, { opacity: 0 }, "-=0.5");

function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass("fadeIn");
    }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function() {
  showImages(".img-hide");
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages(".img-hide");
});
