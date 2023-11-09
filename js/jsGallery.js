const gallery = document.querySelector('#gallery');
const showGallery = document.querySelector('#showGallery');
const mixGallery = document.querySelector('#mixGallery');

const photos = 10;

let displayGallery = false;

for (let i = 0; i < photos; i++) {
    const img = document.createElement('img');
    img.src = `img/${i}.jpg`;

    img.addEventListener('dblclick', (e) => {
        displayGallery = !displayGallery;
        if (displayGallery) {
            img.src = `img/${i}.jpg`;
        } else {
            img.src = 'img/default.gif';
        }
    });

    gallery.appendChild(img);
}

gallery.style.display = 'none';
showGallery.addEventListener('click', (e) => {
    e.preventDefault();
    displayGallery = !displayGallery;
    if (displayGallery) {
        gallery.style.display = 'inline-block';
        showGallery.textContent = 'Paslėpti';
    } else {
        gallery.style.display = 'none';
        showGallery.textContent = 'Rodyti';
    }
});

mixGallery.addEventListener('click', (e) => {
    e.preventDefault();
    shuffleGallery();
});

function shuffleGallery() {
    const images = Array.from(gallery.children);
    images.sort(() => Math.random() - 0.5);
    images.forEach((img) => gallery.appendChild(img));
}
