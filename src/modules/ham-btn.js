import { pageLogic } from './page-switch-logic.js';
import { createHamBtn } from './dom-creation.js';
import navBarLogic from './nav-bar.js';

const hamBtnLogic = (() => {
  const nav = document.querySelector('nav');
  let hamBtn = createHamBtn();

  window.addEventListener('resize', () => addHamBtn());

  function addHamBtn() {
    if (window.innerWidth <= 1300) {
      nav.appendChild(hamBtn);
    } else {
      hamBtn.remove();
    }
  }

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
