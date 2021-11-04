//модуль, который будет отвечать за отрисовку миниатюр
//На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям,
//и заполните их данными:
// Адрес изображения url подставьте как атрибут src изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
//<!-- Шаблон изображения случайного пользователя -->
import { getFotos } from './data.js';
{/* <template id="picture">
      <a href="#" class="picture">
        <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
        <p class ="picture__info">
        <span class ="picture__comments"></span>
        <span class ="picture__likes"></span>
        </p>
      </a>
    </template> */}
const fragment = document.createDocumentFragment();
const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта, ссылка
const similarFotos = getFotos;

similarFotos.forEach((foto) => {
  const fotoElement = templateFragment.cloneNode(true);
  fotoElement.querySelector('.picture__likes').textContent = foto.likes;
  fotoElement.querySelector('.picture__comments').textContent = foto.comments.length;
  fotoElement.querySelector('.picture__img').src = foto.url;
  fragment.appendChild(fotoElement);
});

const userPictures = document.querySelector('.pictures'); //куда будем вставлять
userPictures.appendChild(fragment);


