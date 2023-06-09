(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open1]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    openModalBtn3: document.querySelector('[data-modal-open3]'),
    openModalBtn4: document.querySelector('[data-modal-open4]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    continueModalBtn: document.querySelector('[data-modal-continue]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.continueModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
