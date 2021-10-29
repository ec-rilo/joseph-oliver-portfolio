import { pageLogic } from './page-switch-logic';

(function initContactBlock() {
  const contactBlock = document.querySelectorAll('.contact-block');
  const arr = [...contactBlock];
  arr.forEach((elem) => {
    elem.addEventListener('click', () => {
      pageLogic.switchPg(elem.firstChild.nextSibling);
    });
  });
})();
