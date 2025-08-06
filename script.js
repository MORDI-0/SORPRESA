// Generar mensajes flotantes por toda la pantalla
const messagesContainer = document.querySelector('.messages');
const phrases = ["I LOVE YOU SO MUCH ❤️", "❤️ I LOVE YOU ❤️", "SO MUCH LOVE ❤️"];

function createMultipleMessages() {
    for (let i = 0; i < 7; i++) { 
        const message = document.createElement('span');
        message.classList.add('message');
        message.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        message.style.left = `${Math.random() * 100}%`;
        message.style.top = `${Math.random() * 100}%`;
        message.style.fontSize = `${1 + Math.random() * 2}rem`;
        messagesContainer.appendChild(message);

        setTimeout(() => message.remove(), 12000);
    }
}

setInterval(createMultipleMessages, 1000);

// Rotación automática de fotos en posiciones desordenadas
const photos = document.querySelectorAll('.photos img');
let currentPhoto = 0;

function showNextPhoto() {
    photos.forEach(photo => photo.classList.remove('active'));

    const photo = photos[currentPhoto];
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    const randomRotation = `${Math.random() * 40 - 20}deg`;

    photo.style.left = `${randomX}%`;
    photo.style.top = `${randomY}%`;
    photo.style.setProperty('--rotation', randomRotation);

    photo.classList.add('active');
    currentPhoto = (currentPhoto + 1) % photos.length;
}

setInterval(showNextPhoto, 3000);
showNextPhoto();
