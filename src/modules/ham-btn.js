import { pageLogic } from './page-switch-logic.js';

const hamBtnLogic = (() => {
  let hamBtn = document.querySelector('.nav-icon4');
  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');
  });
})();

export { hamBtnLogic };
