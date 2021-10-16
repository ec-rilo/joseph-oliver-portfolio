import { hamBtnLogic } from './ham-btn';

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

  function createMenuItemArr() {}

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

    if (!menuPg.classList.contains('open-menu')) {
      menuPg.style.pointerEvents = 'none';
      let delayedMenuClose = setTimeout(() => {
        body.style.overflowY = 'auto';
        clearTimeout(delayedMenuClose);
      }, 250);
    }
  }

  function switchPg(clickedPgName) {
    let pgName = clickedPgName.innerHTML.toLowerCase() + '-pg';
    pgName = pgName.replace(/\s/g, '-');
    let pageElemArr = createPageElemArr();
    pageElemArr.forEach((page) => {
      if (page.classList.contains(pgName)) {
        hideAllPages();
        page.style.display = 'block';
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
