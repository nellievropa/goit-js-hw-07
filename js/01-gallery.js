import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryMarkup(galleryItems);
const buttonClick = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
galleryContainer.addEventListener('click', onImageClick);
buttonClick.addEventListener("keydown",onEscKeyPress);


function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original})=> {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</li>
        `;
    })
    .join('');


}

console.log(createGalleryMarkup(galleryItems));


function  onImageClick(event) {
console.log(event.target.classList)
event.preventDefault();
  if(!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalUrl = event.target.dataset.source;
  const addModal = event.target.classList.add('--show-modal');
  console.log(addModal);
  // console.log(originalUrl);
  const instance = basicLightbox.create(`
  <img src="${originalUrl}" width="1280" height="600">
`)

instance.show()
onEscKeyPress()
}


function onCloseModal() {
  // і відписуємось від  window.addEventListener('keydown', onEscKeyPress); перед закриттям модалки
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal'); 
}

function onEscKeyPress(evt) {
 
  console.log(evt.code);

  // так працює і закривається при натисканні любої клавіші!
  // томe треба додати умову с Code:
  // можна ще змінну додати
  const ESC_KEY_CODE = "Escape";
  if(evt.target.code === ESC_KEY_CODE) {
      onCloseModal();
  }
  
  };






// function onClick(event) {
// // console.log(event.target);

// const isImageEl = event.target
// console.log(isImageEl);
// // .contains('gallery__image');
// // const linkEl = document.querySelector('.gallery__link');
// // console.log(linkEl);
// if(!isImageEl) {
//     // event.stopImmediatePropagation(linkEl);
//     event.preventDefault();
// }

// isImageEl.classList.add("--active");
// console.log(isImageEl.classList)


// }

