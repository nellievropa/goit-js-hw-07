import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
galleryContainer.addEventListener('click', onImageClick);
// buttonClick.addEventListener("keydown",onEscKeyPress);


function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description})=> {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
    })
    .join('');
}

console.log(createGalleryMarkup(galleryItems));


function  onImageClick(event) {
// console.log(event.target.classList)
event.preventDefault();
  if(!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalUrl = event.target.dataset.source;
  // console.log(originalUrl);

  const instance = basicLightbox.create(`
  <img src="${originalUrl}" width="1280" height="600">
`,

{
  onShow: (instance) => {
    window.addEventListener("keydown", onEscKeyPress);
  },

  onClose: (instance) => {
    window.removeEventListener("keydown", onEscKeyPress);
  },
}
);

instance.show();

function onEscKeyPress(evt) {
  //  console.log(evt.code);

 const ESC_KEY_CODE = "Escape";
  if(evt.code !== ESC_KEY_CODE) {
   return  
  };
  instance.close();
}
}




