//Функция, возвращающая случайное целое число из переданного диапазона [a, b].
function getRandomInt(a, b) {
  if (a > b) {
    let c;
    c = a;
    a = b;
    b = c;
  }
  return Math.floor((Math.random() * (b - a + 1)) + a);
};

getRandomInt();

// Функция для проверки максимальной длины строки.Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.Пример использования функции:
// Результат: true, если строка проходит по длине, и false — если не проходит
function isLengthOk(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

isLengthOk();
