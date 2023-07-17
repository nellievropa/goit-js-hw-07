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
           alt="${description}"
        //    data-scale="1"
           data-translet-x= "0"
           data-translet-y= "0"
        //    style="display: block
        //    transform: translate(0px, 0px)
        //    scale(1)
        //    opacity: 1"
           />
        </a>
        <div class="caption pos-bottom"
        data-initial-display="block"
        opacity: 1

    color: #fff;
    background: rgba(0,0,0,.8);
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
>
           ${description}
          
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
    // data-initial-display="block"
    // style="display: block;
    // // width: 250 px
    // opacity: 1