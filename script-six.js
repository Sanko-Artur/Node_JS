/*
В файле "input.txt" находится число, которое является порядковым номером числа в ряду чисел Фибоначчи.
1. Реализуйте функцию, которая будет принимать порядковый номер и возвращать соответствующее число из ряда чисел Фибоначчи.
2. Результат выполнения функции запишите в файл "output.txt"
3. См. файлы "input.txt" и "output.txt" в тесте c пометкой "Пример"
 */
const fs = require('fs');

let num = fs.readFileSync("input6-1.txt", "utf8");
//num = Number(num);
console.log(num);

function fib(num) {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

let result = fib(num);
console.log(result);

fs.writeFileSync('output6-1.txt', result.toString());