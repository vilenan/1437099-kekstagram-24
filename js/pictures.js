import { getFotos } from './data.js';
const fragment = document.createDocumentFragment();
const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта, ссылка
const similarFotos = getFotos;
// console.log(similarFotos);

similarFotos.forEach((foto) => {
  const fotoElement = templateFragment.cloneNode(true);
  fotoElement.querySelector('.picture__likes').textContent = foto.likes;
  fotoElement.querySelector('.picture__comments').textContent = foto.comments.length;
  fotoElement.querySelector('.picture__img').src = foto.url;
  fragment.appendChild(fotoElement);
});

const userPictures = document.querySelector('.pictures');
userPictures.appendChild(fragment);

//Полноэкранный показ изображения
const bigPicture = document.querySelector('.big-picture');
const userPicturesList = userPictures.querySelectorAll('.picture');
const bodyElement = document.body;
userPicturesList.forEach((item) => item.addEventListener('click', (evt) => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
}));

const bigPictureImage = bigPicture.querySelector('.big-picture__img');
bigPictureImage.children.src = 'img/logo-background-3.jpg';
const bigPictureLikes = bigPicture.querySelector('.likes-count');
bigPictureLikes.textContent = 1;
const bigPictureCommentsNumber = bigPicture.querySelector('.comments-count');
bigPictureCommentsNumber.textContent = '5';
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');

// <li class="social__comment">
//     <img
//         class="social__picture"
//         src="{{аватар}}"
//         alt="{{имя комментатора}}"
//         width="35" height="35">
//     <p class="social__text">{{текст комментария}}</p>
// </li>
const bigPictureDiscription = bigPicture.querySelector('.social__caption');
bigPictureDiscription.textContent = 'описание';

const bigPictureCommentCount = bigPicture.querySelector('.social__comment-count');
bigPictureCommentCount.classList.add('hidden');
const bigPictureLoader = bigPicture.querySelector('.comments-loader');
bigPictureLoader.classList.add('hidden');


const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
bigPictureClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});
window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
});

