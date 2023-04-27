import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
	const galleryItem = document.createElement('li');
	galleryItem.className = 'gallery__item';
	const galleryLink = document.createElement('a');
	galleryLink.className = 'gallery__link';
	galleryLink.href = element.original;
	const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original);
    galleryImage.alt = element.description;
    galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
});
// console.log(items);
gallery.append(...items);
// console.log(gallery);

gallery.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
		return
	};
const selectImage = evt.target.getAttribute('data-source');
const instance = basicLightbox.create(`<img src="${selectImage}" width="800" height="600">`);

instance.show()
    
    gallery.addEventListener('keydown', evt => {
		if (evt.code === 'Escape') {
			instance.close()
		}
	});
});
