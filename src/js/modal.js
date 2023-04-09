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
function updateCSSClass(a, b) {}

function checkfnlname(field) {
  curr = document.getElementById(field).value;
  if (curr.length > 0) {
    updateCSSClass(field, 1);
    return true;
  } else {
    updateCSSClass(field, 0);
    return false;
  }
}
window.onload = function () {
  var btnSubmit = document.getElementById('submit');
  // disable submit
  btnSubmit.setAttribute('disabled', 'disabled');

  // attach the keyup event to each input
  [].slice
    .call(document.querySelectorAll('form input:not([type="submit"])'))
    .forEach(function (element, index) {
      element.addEventListener(
        'keyup',
        function (e) {
          // compute the number of invalid fields
          var invalidFields = [].slice
            .call(document.querySelectorAll('form input:not([type="submit"])'))
            .filter(function (element, index) {
              return !checkfnlname(element.id);
            });
          if (invalidFields.length == 0) {
            // reenable the submit if n. of invalid inputs is 0
            btnSubmit.removeAttribute('disabled');
          } else {
            // disable submit because there are invalid inputs
            btnSubmit.setAttribute('disabled', 'disabled');
          }
        },
        false,
      );
    });
};
