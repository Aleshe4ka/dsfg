// Задача 1
// Создаем массив и заполняем его значениями cos(x)
var array = [];
for (var i = 0; i < 14; i++) {
    array.push(Math.cos(i)); // Примерное заполнение массива значениями cos(x)
}

// Сортировка массива по убыванию
array.sort(function(a, b) {
    return b - a;
});

console.log('Массив после сортировки:', array);


// Задача 2
var currentDate = new Date();

// Вывод текущей даты в формате 'Месяц, день, час'
var options = { month: 'long', day: 'numeric', hour: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);
console.log('Текущая дата:', formattedDate);

// Получение количества миллисекунд с 01.01.1970 года до текущего момента
var millisecondsSince1970 = currentDate.getTime();
console.log('Миллисекунд с 01.01.1970 года:', millisecondsSince1970);

// Получение количества секунд с 01.01.1970 года до текущего момента
var secondsSince1970 = Math.floor(millisecondsSince1970 / 1000);
console.log('Секунд с 01.01.1970 года:', secondsSince1970);

// Получение номера и названия дня рождения (17.08.2003)
var birthday = new Date('2003-08-17');
var dayOfWeek = birthday.getDay();
var optionsBirthday = { weekday: 'long' };
var formattedBirthday = birthday.toLocaleDateString('en-US', optionsBirthday);
console.log('День рождения:', dayOfWeek, formattedBirthday);

// Задача 3
// Заданные значения оснований и высоты трапеции
var baseA = 5; // Значение основания A
var baseB = 9; // Значение основания B
var height = 4; // Значение высоты h

// Вычисление площади трапеции по формуле: S = (a + b) * h / 2
var area = (baseA + baseB) * height / 2;
console.log('Площадь трапеции:', area);


