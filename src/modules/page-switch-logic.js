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
    let menuPg = document.querySelector('.menu-pg');
    menuPg.classList.toggle('open-menu');
    if (menuPg.classList.contains('open-menu')) {
      menuPg.style.display = 'block';
    } else {
      menuPg.style.pointerEvents = 'none';
      let delayedMenuClose = setTimeout(() => {
        menuPg.style.display = 'none';
        menuPg.style.pointerEvents = 'auto';
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
