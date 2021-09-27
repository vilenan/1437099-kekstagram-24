//Функция, возвращающая случайное целое число из переданного диапазона [a, b].
function getRandomInt(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

getRandomInt();

// Функция для проверки максимальной длины строки.Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.Пример использования функции:
// Результат: true, если строка проходит по длине, и false — если не проходит
function isLengthOk(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

isLengthOk();
