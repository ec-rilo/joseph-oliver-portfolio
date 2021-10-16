import { pageLogic } from './page-switch-logic.js';

const hamBtnLogic = (() => {
  let hamBtn = document.querySelector('.nav-icon4');

  function toggleHamBtn() {
    hamBtn.classList.toggle('open');
  }

  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');
    pageLogic.toggleMenuPg();
  });

  return {
    toggleHamBtn,
  };
})();

export { hamBtnLogic };
