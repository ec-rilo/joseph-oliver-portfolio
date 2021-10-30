import { pageLogic } from './page-switch-logic';

let navBarLogic = (() => {
  const navBar = document.querySelector('nav');
  const navMenu = document.querySelector('.hp-menu');
  const children = [...navMenu.children];
  children.forEach((child) => {
    if (child.firstChild.innerHTML !== 'ArtStation') {
      child.firstChild.addEventListener('click', () => {
        pageLogic.switchPg(child.firstChild);
        console.log(child.firstChild);
      });
    }
  });

  document.addEventListener('scroll', () => changeNavBG());

  function changeNavBG() {
    const homePg = JSON.parse(localStorage.getItem('pageArr'))[0];
    const homePgVal = window.getComputedStyle(
      document.querySelector(`.${homePg}`)
    ).display;

    if (homePgVal !== 'block') {
      navBar.style.backgroundColor = '#4a4e69';
    } else {
      navBar.removeAttribute('style');
    }
  }

  return { changeNavBG };
})();

export default navBarLogic;
