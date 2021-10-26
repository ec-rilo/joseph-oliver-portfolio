import { createBackDrop } from './dom-creation.js';
import { createFocusImg } from './dom-creation.js';

let photographyLogic = (() => {
  class Img {
    constructor(imgSrc) {
      this.imgSrc = imgSrc;
      this.img = document.createElement('img');
      this.img.classList.add('photog-img');
      this.img.setAttribute('src', this.imgSrc);
      this.img.addEventListener('click', this);
    }

    #focus() {
      const photogContainer = document.querySelector('.photog-img-container');
      const backDrop = createBackDrop();
      const focusImg = createFocusImg(this.imgSrc);
      backDrop.appendChild(focusImg);
      photogContainer.appendChild(backDrop);
    }

    handleEvent(e) {
      this.#focus();
    }

    get imgElem() {
      return this.img;
    }
  }

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context('../images/photog/comp-imgs', false, /\.(png|jpe?g|svg)$/)
  );

  function addImgsToHTML() {
    const photogContainer = document.querySelector('.photog-img-container');

    images.forEach((image) => {
      let img = new Img(image);
      photogContainer.appendChild(img.imgElem);
    });
  }

  return {
    addImgsToHTML,
  };
})();

export default photographyLogic;
