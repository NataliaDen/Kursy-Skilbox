const burger = document.querySelector('.burger');
const headerMenuList = document.querySelector('.header__navbar');

burger.addEventListener('click', function() {
  headerMenuList.classList.toggle('show');
})