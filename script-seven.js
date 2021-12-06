/*
Задание:
В файле "input.txt" находится JSON в виде строки.
1. Прочитайте текст из файла с помощью node.js модуля "fs"
2. Преобразуйте полученный текст в объект (JSON)
3. Запишите в файл "output.txt" типы значений всех свойств полученного объекта соблюдая такой же порядок.
Типы должны быть перечислены через запятую ",".
4. См. файлы "input.txt", "output.txt" в тесте c пометкой "Пример".
 */
const fs = require('fs');

let str = fs.readFileSync("input7-1.txt", "utf8").split();
console.log(str);
//str = JSON.stringify(str);
//console.log(str);

let result = JSON.stringify(str, function replacer(value) {

     return typeof (value);
});

console.log(result);

//fs.writeFileSync('output7-1.txt', result);

