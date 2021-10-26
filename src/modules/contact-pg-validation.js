let formLogic = (() => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    checkAllItemsForErrors();
    event.preventDefault();
  });

  const userMessage = document.getElementById('message');
  userMessage.addEventListener('input', () => countChars());

  function checkAllItemsForErrors() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const itemsArr = [name, email, phone, message];
    itemsArr.forEach((item) => {
      errorCheck(item);
    });
  }

  function errorCheck(item) {
    const errorContainer = item.parentElement.nextElementSibling;

    if (item.validity.typeMismatch || !item.validity.valid) {
      errorContainer.style.display = 'block';
    } else {
      errorContainer.style.display = 'none';
    }

    item.addEventListener('input', () => {
      if (item.validity.typeMismatch || !item.validity.valid) {
        errorContainer.style.display = 'block';
      } else {
        errorContainer.style.display = 'none';
      }
    });
  }

  function countChars() {
    let text = document.getElementById('message').value;
    let numChars = 0;

    for (let i = 0; i < text.length; i++) {
      numChars += 1;
    }

    document.getElementById('show-words-count').innerHTML = numChars;
  }
})();

export default formLogic;
