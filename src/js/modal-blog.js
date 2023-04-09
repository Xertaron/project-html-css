(() => {
  const refs = {
    openModalBlogBtn1: document.querySelector('[data-modal-blog-open1]'),
    openModalBlogBtn2: document.querySelector('[data-modal-blog-open2]'),
    openModalBlogBtn3: document.querySelector('[data-modal-blog-open3]'),
    openModalBlogBtn4: document.querySelector('[data-modal-blog-open4]'),
    closeModalBlogBtn: document.querySelector('[data-modal-blog-close]'),
    modal: document.querySelector('[data-modal-blog]'),
  };

  refs.openModalBlogBtn1.addEventListener('click', toggleModal);
  refs.openModalBlogBtn2.addEventListener('click', toggleModal);
  refs.openModalBlogBtn3.addEventListener('click', toggleModal);
  refs.openModalBlogBtn4.addEventListener('click', toggleModal);
  refs.closeModalBlogBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
