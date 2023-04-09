(() => {
  const mobileMenu1 = document.querySelector('.js-menu-container-1');
  const openMenuBtn1 = document.querySelector('.js-open-menu-1');
  const closeMenuBtn1 = document.querySelector('.js-close-menu-1');
  const closeMenuItem1 = document.querySelector('.js-close-item-1');
  const closeMenuItem2 = document.querySelector('.js-close-item-2');
  const closeMenuItem3 = document.querySelector('.js-close-item-3');
  const closeMenuItem4 = document.querySelector('.js-close-item-4');
  const closeMenuItem5 = document.querySelector('.js-close-item-5');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn1.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn1.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu1.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn1.addEventListener('click', toggleMenu);
  closeMenuBtn1.addEventListener('click', toggleMenu);
  closeMenuItem1.addEventListener('click', toggleMenu);
  closeMenuItem2.addEventListener('click', toggleMenu);
  closeMenuItem3.addEventListener('click', toggleMenu);
  closeMenuItem4.addEventListener('click', toggleMenu);
  closeMenuItem5.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu1.classList.remove('is-open');
    openMenuBtn1.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
