/*
Задание:
В файле "input1.txt" находятся числа перечисленные через ",".
В файле "input2.txt" находятся числа перечисленные через ",", обозначающие диапазон "от" и "до" соответственно
1. Прочитайте текст из файлов с помощью node.js модуля "fs"
2. Преобразуйте текст из файла "input1.txt" в массив чисел "numbers"
3. Реалиузуйте функцию rangeFiltering(array, from, to), которая ищет в массиве "array" элементы между "from" и "to" и
возвращает массив этих элементов. "from" и "to" используйте из файла "input2.txt"
4. Запишите в файл "output.txt" все числа из отфильтрованного массива "numbers". Числа должны быть перечислены через запятую ",".
5. См. файлы "input1.txt", "input2.txt" и "output.txt" в тесте c пометкой "Пример".
 */
const fs = require('fs');

let array = fs.readFileSync("input3-1.txt", "utf8").split(',');
console.log(array);
array = array.map(Number);
console.log(array);

let interval = fs.readFileSync("input3-2.txt", "utf8").split(',');

console.log(interval);

let from = interval[0];
let to = interval[1];

console.log(from);
console.log(to);

function rangeFiltering(array, from, to){
    return array.filter(item => (from <= item && item <= to));
}

let numbers = rangeFiltering(array, from, to);
console.log(numbers);
console.log(array);

fs.writeFileSync('output3-1.txt', numbers.toString());


