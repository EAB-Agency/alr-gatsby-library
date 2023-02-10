function openNav() {
  let menu = document.getElementById('menu');
  menu.classList.toggle('main-menu-overlay-open');
}

function closeNav() {
  document.getElementById('menu').classList.toggle('main-menu-overlay-open');
}