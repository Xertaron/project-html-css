(() => {
  const refs = {
    openModalBlogBtn: document.querySelector('[data-modal-blog-open]'),
    closeModalBlogBtn: document.querySelector('[data-modal-blog-close]'),
    modal: document.querySelector('[data-modal-blog]'),
  };

  refs.openModalBlogBtn.addEventListener('click', toggleModal);
  refs.closeModalBlogBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
