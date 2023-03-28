// const slider = document.querySelector('.content');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// });

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("#burger").addEventListener("click", function() {
//         document.querySelector("header__mobile").classList.toggle("open");
//     });
// });


$(document).ready(function() {
    $('.humburger').click(function(event) {
        $('.humburger, .header__mobile').toggleClass('open');
    });
});