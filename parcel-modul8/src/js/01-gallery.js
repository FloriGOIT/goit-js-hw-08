const x = [{pre: "Flo",
           nm: "Vachente",
           oras: "Mangalia"},
           {pre: "Ana",
           nm: "Maria",
           oras: "Mangalia"},
           {pre: "Cornelia",
           nm: "Rosca",
           oras: "Negru Voda"}]
const y = x.map( (a,idx,arr) => `${a.pre} ${a.nm} este nascuta in ${a.oras}.`)
           .join("   ");
console.log(y)


// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector("ul");
container.style.listStyle = "none"
console.log(container);

const listedItems = galleryItems.map (  ({preview,original,description},idx,arr) => `<li class="gallery__item">
                                                                                        <a class="gallery__link" href="${original}">
                                                                                        <img class="gallery__image"
                                                                                             src="${preview}"
                                                                                            data-source="${original}"
                                                                                            alt="${description}"
                                                                                        />
                                                                                        </a>
                                                                                      </li>` )
                                .join("");
//console.log(listed)
container.insertAdjacentHTML('beforeend', listedItems)

const galleryDisplay = new SimpleLightbox('.gallery a', {captionsData: "alt",
                                                         captionDelay: 250,
                                                         captionPosition: "top",});
galleryDisplay.on('show.simplelightbox');




