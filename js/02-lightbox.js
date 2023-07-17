import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
galleryContainer.addEventListener('click', onImageClick);

function createImageMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
       return `
       <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" 
           src="${preview}" 
           alt="${description}" />
        </a>
        <div class="color-meta">
            <p>${description}</p>
          
        </div>
     </li>`;
     
    })
    .join('');
};
console.log(createImageMarkup(galleryItems));

function onImageClick(event) {
    console.log(event.target);
event.preventDefault();
const originalUrl = event.target.dataset.source;
const download = event.target.alt
// console.log(textContent);
var lightbox = new SimpleLightbox('.gallery a', { originalUrl, download });
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";


}

// download