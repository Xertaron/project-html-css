(() => {
  const refs = {
    openModalThanksBtn: document.querySelector('[data-modal-thanks-open]'),
    closeModalThanksBtn: document.querySelector('[data-modal-thanks-close]'),
    continueModalThanks: document.querySelector('[data-modal-thanks-continue]'),
    modal: document.querySelector('[data-modal-thanks]'),
  };

  refs.openModalThanksBtn.addEventListener('click', toggleModal);
  refs.closeModalThanksBtn.addEventListener('click', toggleModal);
  refs.continueModalThanks.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
