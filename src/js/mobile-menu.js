(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuItem1 = document.querySelector('.js-close-item-1');
  const closeMenuItem2 = document.querySelector('.js-close-item-2');
  const closeMenuItem3 = document.querySelector('.js-close-item-3');
  const closeMenuItem4 = document.querySelector('.js-close-item-4');
  const closeMenuItem5 = document.querySelector('.js-close-item-5');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f54d21923669695570c493ecdf983b41019a736f
=======
>>>>>>> 151c9cdf341c0a7c8779bb8779c310bc4bdc7845

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuItem1.addEventListener('click', toggleMenu);
  closeMenuItem2.addEventListener('click', toggleMenu);
  closeMenuItem3.addEventListener('click', toggleMenu);
  closeMenuItem4.addEventListener('click', toggleMenu);
  closeMenuItem5.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
