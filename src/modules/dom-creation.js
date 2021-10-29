import { hamBtnLogic } from './ham-btn';

function createBackDrop() {
  function removeBD() {
    backDrop.remove();
    photogPg.classList.remove('remove-scroll');
  }

  const backDrop = document.createElement('div');
  backDrop.classList.add('back-drop');

  const photogPg = document.querySelector('body');
  photogPg.classList.add('remove-scroll');

  backDrop.addEventListener('click', () => removeBD());

  hamBtnLogic.hamBtn.addEventListener('click', () => {
    removeBD();
    hamBtnLogic.hamBtn.removeEventListener('click', () => removeBD());
  });

  return backDrop;
}

function createFocusImg(imgSrc) {
  let img = document.createElement('img');
  img.setAttribute('src', imgSrc);
  img.classList.add('focus-img');
  return img;
}

function createHamBtn() {
  let hamBtn = document.createElement('div');
  hamBtn.classList.add('nav-icon4');
  for (let i = 0; i < 3; ++i) {
    let layer = document.createElement('span');
    hamBtn.appendChild(layer);
  }
  return hamBtn;
}

export { createBackDrop, createFocusImg, createHamBtn };
