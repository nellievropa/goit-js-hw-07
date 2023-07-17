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
        <div class="captions">
            <h2>${description}</h2>
          
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
const captions = event.target.alt
// console.log(textContent);
// var lightbox = new SimpleLightbox('.gallery a', { originalUrl, captions });
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// Do something…
});

}

// captions 