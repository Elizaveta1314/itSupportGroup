// табы
const headerItem = document.querySelectorAll('.tabs__item'),
      mainContent = document.querySelectorAll('.choose__wrapper-content');
let btnContainer = document.getElementsByClassName("tabs__list");
let btns = document.getElementsByClassName("tabs__item");


function next () {

  for (let item of headerItem) {
    item.addEventListener('click', function() {
        for (let element of mainContent) {
            element.classList.remove('active-1');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('active-1');
    });
}

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active-btn");
      current[0].className = current[0].className.replace(" active-btn", "");
      this.className += " active-btn";
    });
  }
}
next();

const header = document.querySelectorAll('.technologies__tabs__item'),
      main = document.querySelectorAll('.technologies__wrapper-content');
let btnActive = document.getElementsByClassName("technologies__tabs__list");
let btnsActive = document.getElementsByClassName("technologies__tabs__item");
function tabs () {

  for (let item of header) {
    item.addEventListener('click', function() {
        for (let element of main) {
            element.classList.remove('active-technologies');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('active-technologies');
    });
}

  for (let i = 0; i < btnsActive.length; i++) {
    btnsActive[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active-tabs");
      current[0].className = current[0].className.replace("active-tabs", "");
      this.className += " active-tabs";
    });
  }
}
tabs();