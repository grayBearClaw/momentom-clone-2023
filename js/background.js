const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImageUrl = `url(img/${chosenImage})`;

document.body.style.backgroundImage = bgImageUrl;
