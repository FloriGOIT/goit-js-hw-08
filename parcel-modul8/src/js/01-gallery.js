// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const container = document.querySelector(".gallery");
container.style.listStyleType = "none";
const createList = galleryItems
.map ( (a,idx,arr) => `<li class="gallery__item">
                                        <a class="gallery__link" href="${a.original}">
                                        <img class="gallery__image"
                                            src="${a.preview}"
                                            data-source="${a.original}"
                                            alt="${a.description}"/>
                                        </a>
                                     </li>`)
.join("");
container.insertAdjacentHTML("beforeend", createList);
const displayList = new SimpleLightbox(".gallery a", {captionDelay : 200, captionsData : "alt" });

//l-am facut la clasa..yeyyyy



