import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

generateGalleryMarkup(galleryItems, refs.gallery);

refs.gallery.addEventListener("click", (e) => {
  e.preventDefault();

  const keyboardListener = (e) => {
    if (e.code === "Escape") refs.lightbox.close();
  };

  refs.lightbox = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}" />`,
    {
      onShow: (instance) =>
        window.addEventListener("keydown", keyboardListener),
      onClose: (instance) =>
        window.removeEventListener("keydown", keyboardListener),
    }
  );

  refs.lightbox.show();
});

function generateGalleryMarkup(items, containerNode) {
  const images = items.map((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    galleryItem.innerHTML = `<a class="gallery__link"
        href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" /></a>`;
    return galleryItem;
  });
  containerNode.append(...images);
}

// console.log(galleryItems);
