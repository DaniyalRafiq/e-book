

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
//   gsap.from(".hero-content h1", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: "power2.out"
//   });

//   gsap.from(".hero-content p", {
//     opacity: 0,
//     y: 30,
//     duration: 1,
//     delay: 0.3,
//     ease: "power2.out"
//   });

//   gsap.from(".theme-btn", {
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.8,
//     delay: 0.6,
//     ease: "back.out(1.7)"
//   });

//   gsap.from(".hero-img img", {
//     opacity: 0,
//     scale: 0.8,
//     duration: 1.2,
//     delay: 0.5,
//     ease: "elastic.out(1, 0.75)"
//   });


// });
\

