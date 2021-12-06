/*
Задание:
В файлах "keys.txt" и "values.txt" находятся значения перечисленные через ",". Количество значений одинаково.
1. Прочитайте текст из файлов с помощью node.js модуля "fs"
2. Преобразуйте текст из файла "keys.txt" в массив "keys"
3. Преобразуйте текст из файла "values.txt" в массив "values"
4. Создайте объект, где key и value равны элементам масссива "keys" и "values" соответственно
5. Запишите в файл "output.txt" полученный объект (JSON) в виде строки
6. См. файлы "keys.txt", "values.txt" и "output.txt" в тесте c пометкой "Пример".
 */

const fs = require('fs');

let keys = fs.readFileSync("keys5-1.txt", "utf8").split();
console.log(keys);

let values = fs.readFileSync("values5-1.txt", "utf8").split();
console.log(values);

let key = keys[0];
console.log(key);
let value = values[0];
console.log(value);

let obj = {};
obj.key = value;

console.log(Object.entries(obj));

let json = JSON.stringify(obj);

console.log(json);

fs.writeFileSync('output5-1.txt', json.toString());