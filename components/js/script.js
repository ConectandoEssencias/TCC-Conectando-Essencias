const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  const menu = document.getElementById('menu');
  nav.classList.toggle('active');
  menu.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
function closeMenu() {
  const nav = document.getElementById('nav');
  const menu = document.getElementById('menu');
  nav.classList.remove('active');
  menu.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', 'false');
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

btnMobile.addEventListener('click', toggleMenu);//
btnMobile.addEventListener('touchstart', toggleMenu);
