import { hamBtnLogic } from './ham-btn';
import navBarLogic from './nav-bar';

let compStorage = () => {
  function setPage() {}

  return {
    setPage,
  };
};

let pageLogic = (() => {
  function createPageElemArr() {
    let pageNamesArr = JSON.parse(localStorage.getItem('pageArr'));
    let numOfPgNames = pageNamesArr.length;
    let pageElemArr = [];
    for (let i = 0; i < numOfPgNames; ++i) {
      let page = document.querySelector(`.${pageNamesArr[i]}`);
      pageElemArr.push(page);
    }

    return pageElemArr;
  }

  function hideAllPages() {
    let pageElemArr = createPageElemArr();
    pageElemArr.forEach((page) => {
      page.style.display = 'none';
    });
  }

  function toggleMenuPg() {
    let body = document.querySelector('body');

    let menuPg = document.querySelector('.menu-pg');
    menuPg.style.pointerEvents = 'auto';
    menuPg.classList.toggle('open-menu');
    body.style.overflowY = 'hidden';
    body.classList.toggle('remove-scroll');

    if (!menuPg.classList.contains('open-menu')) {
      menuPg.style.pointerEvents = 'none';
      let delayedMenuClose = setTimeout(() => {
        body.removeAttribute('style');
        clearTimeout(delayedMenuClose);
      }, 250);
    }
  }

  function switchPg(clickedPgName) {
    let pgName = clickedPgName.innerHTML.toLowerCase() + '-pg';
    pgName = pgName.replace(/\s/g, '-');
    let pageElemArr = createPageElemArr();
    pageElemArr.forEach((page) => {
      if (pgName === 'artstation-pg') {
        window.open(
          'https://www.artstation.com/josepholiver/profile',
          '_blank'
        );
      } else if (page.classList.contains(pgName)) {
        hideAllPages();
        page.style.display = 'block';
        navBarLogic.changeNavBG();
      }
    });
  }

  function togglePointerEve(elem) {
    console.log(elem);
    elem.classList.toggle('curr-page-disabled');
  }

  function menuItemLogic() {
    let menuArr = [
      ...document.querySelector('.menu-pg-item-container').children,
    ];

    menuArr.forEach((item) => {
      item.addEventListener('click', () => {
        switchPg(item);
        toggleMenuPg();
        hamBtnLogic.toggleHamBtn();
      });
    });
  }

  menuItemLogic();

  return {
    toggleMenuPg,
  };
})();

export { pageLogic, compStorage };
