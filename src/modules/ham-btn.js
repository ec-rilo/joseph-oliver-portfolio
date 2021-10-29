import { pageLogic } from './page-switch-logic.js';
import { createHamBtn } from './dom-creation.js';
import navBarLogic from './nav-bar.js';

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
    hamBtn,
  };
})();

export { hamBtnLogic };
