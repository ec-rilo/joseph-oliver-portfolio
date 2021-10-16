const hamBtnLogic = (() => {
  const hamBtnContainer = document.querySelector('.ham-btn-container');

  function createHamLayers() {
    const numOfHamLayers = 3;
    for (let i = 0; i < numOfHamLayers; ++i) {
      let layer = document.createElement('div');
      layer.classList.add('ham-layer');
      hamBtnContainer.appendChild(layer);
    }
  }

  function initHamBtn() {
    createHamLayers();
  }

  initHamBtn();
})();

export { hamBtnLogic };
