function createBackDrop() {
  let backDrop = document.createElement('div');
  backDrop.classList.add('back-drop');
  backDrop.addEventListener('click', () => {
    backDrop.remove();
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
