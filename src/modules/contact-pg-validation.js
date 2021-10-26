let formLogic = (() => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const itemsArr = [name, email, phone, message];

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    checkAllItemsForErrors();
    event.preventDefault();
  });

  const userMessage = document.getElementById('message');
  userMessage.addEventListener('input', () => countChars());

  function countChars() {
    let text = document.getElementById('message').value;
    let numChars = 0;

    for (let i = 0; i < text.length; i++) {
      numChars += 1;
    }

    document.getElementById('show-words-count').innerHTML = numChars;
  }

  function checkAllItemsForErrors() {
    itemsArr.forEach((item) => {
      errorCheck(item);
    });
  }

  function errorCheck(item) {
    const itemError = item.parentElement.nextElementSibling;
    const errorMsg = document.querySelector('.error-message');

    if (item.validity.typeMismatch || !item.validity.valid) {
      itemError.style.display = 'block';
      errorMsg.classList.add('show');
    } else {
      itemError.style.display = 'none';
    }

    item.addEventListener('input', () => {
      let errorCount = 0;

      if (item.validity.typeMismatch || !item.validity.valid) {
        itemError.style.display = 'block';
      } else {
        itemError.style.display = 'none';
      }

      itemsArr.forEach((input) => {
        if (!input.validity.valid) {
          errorCount += 1;
        }
      });

      if (errorCount === 0) {
        errorMsg.classList.add('success-message');
        errorMsg.innerHTML = 'You are ready to submit!';
      } else {
        errorMsg.innerHTML = 'Please complete required fields.';
        errorMsg.classList.remove('success-message');
      }
    });
  }

  // Check each input individually. If it has an error, increment error check.
  // if it doesn't, decrement it.
  // always initialize to zero when it's called again.
})();

export default formLogic;
