import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
galleryContainer.addEventListener('click', onClick);
// galleryContainer.addEventListener('click', onGalleryContainer);

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

// [...galleryContainer.children].forEach(item => item.addEventListener('click', onClick))

function  onClick(event) {
  // знайти Url
  if(!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalUrl = event.target.dataset.source;
  console.log(originalUrl);
}



// 
// const currentActiveImg =  document.querySelector('.gallery')
// currentActiveImg.addEventListener('click', onGalleryContainer);
// function onGalleryContainer(event) {
//   if(event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.gallery__image--active')
// }

// const instance = document.querySelector('.gallery__image').onclick = () => {

// 	basicLightbox.create(`
//      <div class="modal">
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
//     </div>
// 	`).show()

// }

// console.log(instance);

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
     
    </div>
`)

instance.show()


// function onGalleryContainer(event) {
// // console.log(event.target);

// const isImageEl = event.target.classList.contains('gallery__image');

// console.log(isImageEl);
// const linkEl = document.querySelector('.gallery__link').value;
// console.log(linkEl);
// if(!isImageEl) {
//     // event.stopImmediatePropagation(linkEl);
//     event.preventDefault();
// }

// document.body.style.backgroundColor = teal;


// }

