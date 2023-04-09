(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-blog-open1]'),
    openModalBtn2: document.querySelector('[data-modal-blog-open2]'),
    openModalBtn3: document.querySelector('[data-modal-blog-open3]'),
    openModalBtn4: document.querySelector('[data-modal-blog-open4]'),
    closeModalBtn: document.querySelector('[data-modal-blog-close]'),
    modal: document.querySelector('[data-modal-blog]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
