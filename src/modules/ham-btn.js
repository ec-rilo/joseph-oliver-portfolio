const hamBtnLogic = (() => {
  let hamBtn = document.querySelector('.nav-icon4');
  console.log(hamBtn);
  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');
    console.log('hello');
  });
})();

export { hamBtnLogic };
