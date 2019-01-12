let menu = document.getElementById('nav-btn');
let menu_content = document.getElementById('menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    menu.src = 'image/baseline-close-24px.svg';
    menu_content.style.display = 'block';
    menu_content.style.transform = 'translateX(-0em)';
  }else {
    menu.src = 'image/baseline-menu-24px.svg';
    menu_content.style.transform = 'translateX(16em)';
  }
});