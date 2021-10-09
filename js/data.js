import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';
const FOTOS_NUMBER = 25;
const fotosIndexes = Array(FOTOS_NUMBER).fill(null).map((item, i) => i + 1);
const urlIndexes = fotosIndexes.slice();

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
    id: fotosIndexes.shift(), //1-25 не повторяются
    url: `photos/${urlIndexes.pop()}.jpg`, //где {{i}} — это число от 1 до 25
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(LIKES_RANGE_MIN, LIKES_RANGE_MAX), //Случайное число от 15 до 200.
    comments: Array.from({ length: commentsNumber }, createComment),
  };
};

const getFotos = Array.from({ length: FOTOS_NUMBER }, createFotoCard);
export { getFotos };
