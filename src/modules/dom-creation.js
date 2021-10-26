function createBackDrop() {
  const backDrop = document.createElement('div');
  backDrop.classList.add('back-drop');

  const body = document.querySelector('body');
  body.style.position = 'fixed';

  backDrop.addEventListener('click', () => {
    backDrop.remove();
    body.style.position = 'static';
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
