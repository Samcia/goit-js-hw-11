export { renderGallery };

const gallery = document.querySelector('.gallery');

function renderGallery(images) {
  const markup = images
    .map(image => {
      const {
        id,
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
        
          <div class="photo-card" id="${id}">
          <a class="gallery-link" href="${largeImageURL}"><img class="gallery-img" src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
          <div class="info">
            <ul class="info-list">
              <li class="info-item"><b>Likes: </b>${likes}</li>
              <li class="info-item"><b>Views: </b>${views}</li>
              <li class="info-item"><b>Comments: </b>${comments}</li>
              <li class="info-item"><b>Downloads: </b>${downloads}</li>
            </div>
          </div>
      
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
