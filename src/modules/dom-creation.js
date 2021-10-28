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

export { createBackDrop, createFocusImg };
