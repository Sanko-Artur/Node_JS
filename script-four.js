/*
Задание:
В файле "number.txt" находится число.
1. Прочитайте текст из файла с помощью node.js модуля "fs"
2. Проверьте, является ли данное число простым. Запишите в файл "output.txt" true либо false.
3. См. файлы "number.txt" и "output.txt" в тесте c пометкой "Пример".
 */
const fs = require('fs');

let number = fs.readFileSync("input4-1.txt", "utf8");
console.log(number);

let result;
console.log(result);
//let a =  7;

loop:
for(let i = 2 ; i < number ; i++){
    if( number % i == 0){
        result = false;
        break;
            }else{
        result = true;
    }
}

console.log(result);

fs.writeFileSync('output4-1.txt', result.toString());
