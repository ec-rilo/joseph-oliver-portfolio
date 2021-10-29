let navBarLogic = (() => {
  const navBar = document.querySelector('nav');

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
})();

export default navBarLogic;
