/*
Задание:
В файле "input.txt" находятся целые числа перечисленные через ",".
1. Прочитайте текст из файла с помощью node.js модуля "fs"
2. Преобразуйте текст из файла "input.txt" в массив чисел "numbers"
3. Запишите в новый массив numPositive все числа из массива numbers, которые больше 0;
4. Запишите в новый массив numNegative все числа из массива numbers, которые меньше 0;
5. Запишите в файл "output1.txt" все числа из массива numPositive. Числа должны быть перечислены через запятую ",".
6. Запишите в файл "output2.txt" все числа из массива numNegative. Числа должны быть перечислены через запятую ",".
7. См. файлы "input.txt", "output1.txt" и "output2.txt" в тесте c пометкой "Пример".
 */
const fs = require('fs');

let content = fs.readFileSync("input2.txt", "utf8");

console.log(content);

let arr = content.split(',');

console.log(arr);

let numPositive = [];
let numNegative = [];

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > 0){
        numPositive.push(arr[i]);
    }else{
        numNegative.push(arr[i]);
    }
}

console.log(numPositive);
console.log(numNegative);

fs.writeFileSync('output2-1.txt', numPositive.toString());
fs.writeFileSync('output2-2.txt', numNegative.toString());
