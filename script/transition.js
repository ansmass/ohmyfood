const elements = document.querySelectorAll('.element');
let delay = 0;

elements.forEach((element, index) => {
     if (index === 0) {
          delay = 50;
     }
     setTimeout(() => {
          element.style.opacity = 1;
     }, delay);
     delay += 400;
});