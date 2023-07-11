import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

galleryContainer.addEventListener('click', onGalleryContainer);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original})=> {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
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

function onGalleryContainer(event) {
// console.log(event.target);

const isImageEl = event.target.classList.contains('gallery__image');
const linkEl = document.querySelector('.gallery__link')
if(!isImageEl) {
    // event.stopImmediatePropagation(linkEl);
    event.preventDefault();
}

document.body.style.backgroundColor = teal;

}

