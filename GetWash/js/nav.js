const navBtn = document.getElementById('navBtn');
const mainNav = document.getElementById('mainNav');
const accessBtn = document.getElementById('accessBtn');

let number = 0;

const resizeHandler = () => {
  if (document.documentElement.clientWidth >= 600) {
    number = 0;
    mainNav.style = {};
    accessBtn.style = {};
  }
}

window.addEventListener('resize', resizeHandler);

navBtn.addEventListener('click', () => {
  if (number === 0) {
    number = 1;
    const heightNav = mainNav.firstElementChild.offsetHeight;
    mainNav.style.height = heightNav + 'px';
    accessBtn.style.display = 'inline-block';
  } else {
    number = 0;
    mainNav.style = {};
    accessBtn.style = {};
  }
});