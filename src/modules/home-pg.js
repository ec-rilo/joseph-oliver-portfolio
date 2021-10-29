import { pageLogic } from './page-switch-logic';

let homePgLogic = (() => {
  const impBtn1 = document.querySelector('.imp-btn-1');
  const impBtn2 = document.querySelector('.imp-btn-2');
  impBtn1.addEventListener('click', () => pageLogic.switchPg(impBtn1));
  impBtn2.addEventListener('click', () => pageLogic.switchPg(impBtn2));
})();

export default homePgLogic;
