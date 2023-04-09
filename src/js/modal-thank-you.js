(() => {
  const refs = {
    openModalThankYouBtn: document.querySelector('[data-modal-thanks-open]'),
    closeModalThankYouBtn: document.querySelector('[data-modal-thanks-close]'),
    continueModalThankYou: document.querySelector('[data-modal-thanks-continue]'),
    modalThankYou: document.querySelector('[data-modal-thanks]'),
  };

  refs.openModalThankYouBtn.addEventListener('click', toggleModal);
  refs.closeModalThankYouBtn.addEventListener('click', toggleModal);
  refs.continueModalThankYou.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
