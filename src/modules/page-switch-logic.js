let compStorage = () => {
  function setPage() {}

  return {
    setPage,
  };
};

let pageLogic = (() => {
  function toggleMenuPg() {
    let menuPg = document.querySelector('.menu-pg');
    menuPg.classList.toggle('open-menu');
  }

  function toggleCurrPg() {}

  return {
    toggleMenuPg,
  };
})();

export { pageLogic, compStorage };
