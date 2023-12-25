// Задача 1
var lang = 'рус'; // Значение переменной lang

var msw; // Переменная для массива дней недели на русском
switch (lang) {
    case 'рус':
        msw = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        break;
    default:
        msw = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        break;
}
console.log('Массив дней недели:', msw);

// Задача 2
var str = 'ab123cde45'; // Заданная строка
var charAtIndex4 = str.charAt(3); // Получение символа с индексом 4 (индексация начинается с 0)
var sumOfDigits = 0;

for (var i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str.charAt(i)))) { // Проверка, является ли символ цифрой
        sumOfDigits += parseInt(str.charAt(i)); // Если цифра, добавляем ее к сумме
    }
}

var isChar = isNaN(parseInt(charAtIndex4)); // Проверка, является ли символ буквой
var isSumEven = sumOfDigits % 2 === 0; // Проверка, является ли сумма цифр четной

console.log('Символ в позиции 4 - буква:', !isChar);
console.log('Сумма цифр четная:', isSumEven);

// Задача 3
var currentDate = new Date(); // Текущая дата
var month = currentDate.getMonth() + 1; // Получение номера месяца (начиная с 0)
var season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = 'зима';
        break;
    case 3:
    case 4:
    case 5:
        season = 'весна';
        break;
    case 6:
    case 7:
    case 8:
        season = 'лето';
        break;
    case 9:
    case 10:
    case 11:
        season = 'осень';
        break;
    default:
        season = 'неверный месяц';
        break;
}

console.log('Время года:', season);
console.log('Месяц:', month);

// Задача 4
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]; // Заданный массив
var sumEven = 0;
var sumDivisibleBy3 = 0;

for (var j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) { // Проверка, является ли элемент четным
        sumEven += arr[j]; // Если четный, добавляем его к сумме четных элементов
    }
    if (arr[j] % 3 === 0) { // Проверка, является ли номер элемента кратным 3
        sumDivisibleBy3 += arr[j]; // Если кратен 3, добавляем его к сумме элементов, номера которых кратны 3
    }
}

console.log('Сумма четных элементов:', sumEven);
console.log('Сумма элементов, номера которых кратны 3:', sumDivisibleBy3);
