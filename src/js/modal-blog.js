(() => {
  const refs = {
    openModalBlogBtn: document.querySelector('[data-modal-blog-open]'),
    closeModalBlogBtn: document.querySelector('[data-modal-blog-close]'),
    modal: document.querySelector('[data-modal-blog]'),
    modalThankYou: document.querySelector('[data-modal-thanks]'),
    openModalThankYouBtn: document.querySelector('[data-modal-thanks-open]'),
    closeModalThankYouBtn: document.querySelector('[data-modal-thanks-close]'),
    continueModalThankYou: document.querySelector('[data-modal-thanks-continue]'),
  };

  refs.openModalBlogBtn.addEventListener('click', toggleModal);
  refs.closeModalBlogBtn.addEventListener('click', toggleModal);
  refs.openModalThankYouBtn.addEventListener('click', toggleModal);
  refs.closeModalThankYouBtn.addEventListener('click', toggleModal);
  refs.continueModalThankYou.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
