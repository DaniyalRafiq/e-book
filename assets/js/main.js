

// Get Quote Form validation

// (function () {
//   'use strict';
//   var forms = document.querySelectorAll('.needs-validation');
//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms).forEach(function (form) {
//     form.addEventListener('submit', function (event) {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add('was-validated');
//     }, false);
//   });
// })();


// $(document).ready(function () {
//   $('.navdesktop').hover(
//     function () {
//       $(this).addClass('show');
//       $(this).find('.dropdown-navdesktop').first().addClass('show');
//     },
//     function () {
//       $(this).removeClass('show');
//       $(this).find('.dropdown-navdesktop').first().removeClass('show');
//     }
//   );
// });

// Sticky header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const posterOverlay = document.createElement('img'); // Create poster dynamically
let isPosterRemoved = false; // Track if the poster has been removed

// Set up the poster overlay
posterOverlay.src = 'assets/images/trailer-thumbnail.jpg'; // Set your poster image
posterOverlay.id = 'posterOverlay';
posterOverlay.style.position = 'absolute';
posterOverlay.style.top = '0';
posterOverlay.style.left = '0';
posterOverlay.style.width = '100%';
posterOverlay.style.height = '100%';
posterOverlay.style.objectFit = 'cover';
posterOverlay.style.cursor = 'pointer';
posterOverlay.style.zIndex = '2'; // Make sure it's above the video

// Insert the poster overlay inside the video container
document.querySelector('.video-container').appendChild(posterOverlay);

// When video plays for the first time, remove the poster and hide play button
video.addEventListener('play', () => {
  playButton.style.display = 'none';
  if (!isPosterRemoved) {
    posterOverlay.style.display = 'none';
    isPosterRemoved = true; // Mark poster as removed
  }
});

// When video pauses, only show the play button (not the poster)
video.addEventListener('pause', () => {
  playButton.style.display = 'flex';
});

// Toggle play/pause when the play button is clicked
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Clicking on the poster should play the video
posterOverlay.addEventListener('click', () => {
  posterOverlay.style.display = 'none';
  isPosterRemoved = true; // Ensure the poster does not return
  video.play();
});



//=============== Cursor====================
// const TAIL_LENGTH = 30;
// const cursor = document.getElementById("cursor");

// let mouseX = 0;
// let mouseY = 0;

// let cursorCircles;
// let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

// function onMouseMove(event) {
//   mouseX = event.clientX;
//   mouseY = event.clientY;
// }

// function onClick(event) {
//   for (let i = 0; i < TAIL_LENGTH; i++) {
//     cursorHistory[i].x += Math.random() * 100 - 50;
//     cursorHistory[i].y += Math.random() * 100 - 50;
//   }
// }

// function initCursor() {
//   for (let i = 0; i < TAIL_LENGTH; i++) {
//     let div = document.createElement("div");
//     div.classList.add("cursor-circle");
//     cursor.append(div);
//   }
//   cursorCircles = Array.from(document.querySelectorAll(".cursor-circle"));
// }

// function updateCursor() {
//   cursorHistory.shift();
//   cursorHistory.push({ x: mouseX, y: mouseY });

//   for (let i = 0; i < TAIL_LENGTH; i++) {
//     let current = cursorHistory[i];
//     let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

//     let xDiff = next.x - current.x;
//     let yDiff = next.y - current.y;

//     current.x += xDiff * 0.35;
//     current.y += yDiff * 0.35;
//     cursorCircles[i].style.transform = `translate(${current.x}px, ${
//       current.y
//     }px) scale(${i / TAIL_LENGTH})`;
//   }
//   requestAnimationFrame(updateCursor);
// }

// document.addEventListener("mousemove", onMouseMove, false);
// document.addEventListener("click", onClick, false);

// initCursor();
// // updateCursor();
// window.addEventListener("scroll", function () {
//   let heroSection = document.querySelector(".hero-section");
//   let scrollPosition = window.scrollY;
//   heroSection.style.backgroundPosition = `center ${scrollPosition * 0.1}px`;
// });
// window.addEventListener("scroll", function () {
//   let heroSection = document.querySelector(".about-book");
//   let scrollPosition = window.scrollY;
//   heroSection.style.backgroundPosition = `center ${scrollPosition * 0.03}px`;
// });
// window.addEventListener("scroll", function () {
//   let heroSection = document.querySelector(".other-hero");
//   let scrollPosition = window.scrollY;
//   heroSection.style.backgroundPosition = `center ${scrollPosition * 1}px`;
// });


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3, // Show 6 slides at a time
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 2000, // Auto slide every 2 seconds
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     1024: { slidesPerView: 3 },
//     768: { slidesPerView: 2 },
//     480: { slidesPerView: 1 },
//     320: { slidesPerView: 1 }
//   }
// });



// document.addEventListener("DOMContentLoaded", function () {


// });


// gsap.from(".hero-content h1", {
//   opacity: 0,
//   x: -50,
//   duration: 3,

// });
// gsap.from(".hero-content p", {
//   opacity: 0,
//   x: -50,
//   duration: 2,
//   delay: 1,

// });
// gsap.from(".hero-content .theme-btn", {
//   opacity: 0,
//   y: 500,
//   duration: 2,
//   delay: 0,
//   yoyo: true,
//   repeat: -1,
// });


var heroTl = gsap.timeline()
var navTl = gsap.timeline()




navTl.from(".header-stagger", {
  y: -400,
  opacity: 0,
  duration: 1,
  delay: 0,
  stagger: .1
})
// navTl.from(".header-stagger", {
//   y: -400,
//   opacity: 0,
//   duration: 1,
//   delay: 0,
//   stagger: .1
// })
// navTl.from(".header-stagger", {
//   y: -400,
//   opacity: 0,
//   duration: 1,
//   delay: 0,
//   stagger: .3
// })

heroTl.from(".hero-content h1", {
  opacity: 0,
  x: -50,
  duration: .2,
  delay: 1
})
heroTl.from(".hero-content p", {
  opacity: 0,
  x: -50,
  duration: .5,

})
heroTl.from(".hero-content .hero-btn-main", {
  opacity: 0,
  y: 500,
  duration: .5,
})
gsap.from(" .hero-img", {
  opacity: 0,
  scale: .3,
  y: 50,
  delay: 1.4,
  duration: 1,

})
var aurthorTl = gsap.timeline()


gsap.from(".aurthor-section-content h2", {
  opacity: 0,
  y: 200,
  delay: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".aurthor-section-content", // Element that triggers the animation
    // scroller: "body",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  }
});

gsap.from(".aurthor-section-content p", {
  opacity: 0,
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".aurthor-section-content", // Element that triggers the animation
    // scroller: "body",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  }
})
gsap.from(".author-img.img-box", {
  opacity: 0,
  scale: .3,
  duration: 1,
  scrollTrigger: {
    trigger: ".aurthor-section-content", // Element that triggers the animation
    // scroller: "body",
    scrub: 1, // ✅ Smooth animation on scroll
    end: "top center",
    start: "top bottom",

  }
})
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const afterRule = CSSRulePlugin.getRule(".aurthor-section-main::after");

gsap.to(afterRule, {
  width: "100%", // ✅ Expand width to 100%
  height: "100%",
  duration: 5,
  borderRadius: "0%", // ✅ Remove circle shape
  scrollTrigger: {
    trigger: ".aurthor-section-main",
    // scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top center",
    scrub: 3, // ✅ Smooth animation on scroll

  }
});

gsap.from(".about-book .main-heading-center", {
  opacity: 0,
  scale: 0.9,
  y: 50,
  textShadow: "5px 19px 4px #c9c9c9",
  rotateX: 57, // ✅ Added rotateX transformation
  duration: 1,
  scrollTrigger: {
    trigger: ".about-book .main-heading-center",
    end: "top center",
    scrub: 1,
    start: "top bottom",
  },

});

gsap.from(".img-box-content", {
  opacity: 0,
  y: 100,
  duration: 1,

  scrollTrigger: {
    trigger: "section.about-book .row", // Element that triggers the animation
    // scroller: "body",
    scrub: 1, // ✅ Smooth animation on scroll

    start: "top 100%",
    end: "bottom 100%",
  }
})

gsap.from(".about-book-stagger", {
  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 2,

  scrollTrigger: {
    trigger: ".about-book .row", // Element that triggers the animation
    // scroller: "body",
    scrub: 1, // ✅ Smooth animation on scroll

    start: "top 100%",
    end: "bottom 100%",
  }
});

// gsap.from(".about-book-card-1", {
//   opacity: 0,
//   y: 200,
//   duration: .3,
//   scrollTrigger: {
//     trigger: ".about-book-cards-main", // Element that triggers the animation
//     // scroller: "body",
//     end: "top center",
//     scrub: 1,
//     start: "top bottom",
//     scrub: true,
//   }
// });
// gsap.from(".about-book-card-2", {
//   opacity: 0,
//   y: 200,
//   delay: 0.2,
//   duration: .3,
//   scrollTrigger: {
//     trigger: ".about-book-cards-main", // Element that triggers the animation
//     // scroller: "body",
//     end: "top center",
//     scrub: 1,
//     start: "top bottom",
//     scrub: true,
//   }
// });
// gsap.from(".about-book-card-3", {
//   opacity: 0,
//   delay: 0.3,
//   y: 200,
//   duration: .3,
//   scrollTrigger: {
//     trigger: ".about-book-cards-main", // Element that triggers the animation
//     // scroller: "body",
//     end: "top center",
//     scrub: 1,
//     start: "top bottom",
//     scrub: true,
//   }
// });
gsap.from(".about-book-card", {
  opacity: 0,
  y: 200,
  // delay: ,
  duration: .3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".about-book-card", // Element that triggers the animation
    // scroller: "body",
    end: "top center",
    start: "top bottom",
  }
});


// gsap.from(".hero-content h1", {
//   opacity: 0,
//   x: -50,
//   duration: .5,
//   delay: 0
// })
// gsap.from(".hero-content p", {
//   opacity: 0,
//   x: -50,
//   duration: .5,

//   delay: .1
// })
// gsap.from(".hero-content .hero-btn-main", {
//   opacity: 0,
//   y: 500,
//   duration: .5,
//   delay: .2
// })
// gsap.from(" .hero-img", {
//   opacity: 0,
//   scale: .3,
//   y: 50,
//   duration: .5,

//   delay: .3
// })


