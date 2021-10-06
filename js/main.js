// Функция для проверки максимальной длины строки.Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.Пример использования функции:
// Результат: true, если строка проходит по длине, и false — если не проходит
// function isLengthOk(string, maxLength) {
//   return string.length <= maxLength;
// }
// isLengthOk('Привет!', 5);
//Функция, возвращающая случайное целое число из переданного диапазона [a, b].
// function getRandomInt(min, max) {
//   if (min > max) {
//     const temp = min;
//     min = max;
//     max = temp;
//   }
//   if (min < 0) {
//     return 'Диапазон может быть только положительным, включая 0';
//   }
//   return Math.floor((Math.random() * (max - min + 1)) + min);
// }
//getRandomInt(7, 12);
function getRandomPositiveInteger(a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа
  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

/*функции для создания массива из 25 сгенерированных объектов.
Каждый объект массива — описание фотографии, опубликованной пользователем.
Напишем функцию генерирующую объект- описание фото
*/

const FOTOS_NUMBER = 25;
const FOTOS_INDEXES = Array.from({ length: FOTOS_NUMBER });
for (let j = 0; j < FOTOS_INDEXES.length; j++) { FOTOS_INDEXES[j] = j + 1; }
const URL_INDEXES = FOTOS_INDEXES.slice();

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];
const AUTHOR_NAMES = [
  'Артем',
  'Александр',
  'Роман',
  'Василий',
  'Павел',
  'Константин',
  'Ольга',
  'Анна',
  'Наталья',
  'Анастасия',
  'Елена',
];
const DESCRIPTIONS = [
  'лето в деревне',
  'рыжий кот',
  'школа',
  'закат на море',
  'кокосовая пальма',
  'яхта',
  'английский завтрак',
  'праздничный торт',
];

const LIKES_RANGE_MIN = 15;
const LIKES_RANGE_MAX = 200;

const createFotoCard = () => {
  const commentsNumber = getRandomPositiveInteger(1, 1000);

  const createComment = () => {
    const AVATARS_NUMBER = 6;
    const randomMessageLength = getRandomPositiveInteger(1, 2);
    //функция для создания сообщения в комментарии
    const getmessageFrase = () => {
      const messageFrase = [];
      for (let i = 0; i < randomMessageLength; i++) {
        messageFrase.push(MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)]);
      }
      return messageFrase.join(' ');
    };

    return {
      id: getRandomPositiveInteger(1, commentsNumber),
      avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_NUMBER)}.svg`,
      message: getmessageFrase(),
      name: AUTHOR_NAMES[getRandomPositiveInteger(0, AUTHOR_NAMES.length - 1)],
    };
  };

  return {
    id: FOTOS_INDEXES.shift(), //1-25 не повторяются
    url: `photos/${URL_INDEXES.pop()}.jpg`, //где {{i}} — это число от 1 до 25
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(LIKES_RANGE_MIN, LIKES_RANGE_MAX), //Случайное число от 15 до 200.
    comments: Array.from({ length: commentsNumber }, createComment),
  };
};

const getFotos = Array.from({ length: FOTOS_NUMBER }, createFotoCard);

