/*
Задание:
В файле "input.txt" находятся числа перечисленные через ",".
1. Прочитайте текст из файла с помощью node.js модуля "fs"
2. Преобразуйте текст из файла "input.txt" в числовой массив "numbers"
3. Отсортируйте массив "numbers" в порядке убывания
4. Запишите в файл "output.txt" все числа из отсортированного массива numbers. Числа должны быть перечислены через запятую ",".
5. См. файлы "input.txt" и "output.txt" в тесте c пометкой "Пример".
 */
const fs = require('fs');

let content = fs.readFileSync("input.txt", "utf8");

console.log(content);

let numbers = content.split(',').sort( (a, b) => b - a ).toString();

console.log(numbers);

fs.writeFileSync('output.txt', numbers);

