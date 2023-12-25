// Задача 1
var R = ['1', '2', '3']; // Создаем массив R

var m = 4; // Число числовых элементов для добавления в начало
var n = 2; // Число текстовых элементов для добавления в конец

for (var i = 1; i <= m; i++) {
    R.unshift(i.toString()); // Добавляем числовые элементы в начало массива R
}

for (var j = 1; j <= n; j++) {
    R.push('Text' + j); // Добавляем текстовые элементы в конец массива R
}

console.log('Массив R:', R);



// Задача 2
var array2D = []; // Создаем пустой двумерный массив

// Заполняем двумерный массив случайными числами
for (var row = 0; row < 5; row++) {
    var innerArray = [];
    for (var col = 0; col < 8; col++) {
        innerArray.push(Math.random()); // Заполняем случайными числами
    }
    array2D.push(innerArray);
}

// Рассортировываем строки с четными номерами
for (var i = 0; i < array2D.length; i++) {
    if (i % 2 === 0) {
        array2D[i].sort(function(a, b) {
            return b - a; // Сортировка по убыванию
        });
    }
}

console.log('Двумерный массив:', array2D);

// Задача 3
var array2D = [ 
  [1, 'text', 3, 'text', 5],
  ['text', 7, 8, 'text', 10],
  [11, 12, 'text', 14, 'text'],
  ['text', 16, 17, 'text', 19],
  [20, 'text', 22, 23, 'text'],
  ['text', 25, 26, 'text', 28]
]; // Заданный двумерный массив

// Преобразуем числовые элементы в строки
for (var row = 0; row < array2D.length; row++) {
  for (var col = 0; col < array2D[row].length; col++) {
      if (typeof array2D[row][col] === 'number') {
          array2D[row][col] = array2D[row][col].toString();
      }
  }
}

// Изменяем порядок элементов массива на обратный
array2D.reverse();

console.log('Измененный двумерный массив:', array2D);

  // Задача 4
  var textArray2D = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7']
]; // Заданный двумерный текстовый массив

var k = 5; // Число строк для добавления в начало
var m = 3; // Число строк для удаления с конца

for (var i = 1; i <= k; i++) {
    var newRow = [];
    for (var j = 1; j <= textArray2D[0].length; j++) {
        newRow.push('new' + i + String.fromCharCode(97 + j)); // Генерируем строки для добавления в начало
    }
    textArray2D.unshift(newRow); // Добавляем строки в начало массива
}

for (var k = 1; k <= m; k++) {
    textArray2D.pop(); // Удаляем строки с конца массива
}

console.log('Измененный двумерный текстовый массив:', textArray2D);
