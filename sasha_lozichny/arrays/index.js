// Task_1
// С помощью цикла создать массив, каждый элемент
// которого равен квадрату своего номера.

// const arr = [];
// let sizeArray = 8;
// for (let i = 0; arr.length !== sizeArray; i++) {
//   arr[i] = i * i;
// }
// alert(arr);

//Task_3
// Создать массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива.

// const arr = [2, 34, 5, 27, 56, 8, 10, 21, 99, 78];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum++;
//   }
// }
// alert(sum);

//Task_4
// Создать массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

// const arr = [2, 4, 7, 12, 22, 3, 9, 54, 177, 878];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// alert(max);

//Task_2
// С помощью цикла создать массив, который
// одинаково читается как слева направо, так и справа
// налево (Количество элементов массива: 9).

// const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (let i = 0; i < 5; i++) {
//   arr[i] = i;
//   arr[arr.length - 1 - i] = i;
// }
// console.log(arr);

// Task_4
// Сформировать массив из чисел, которые делятся на
// 3 (Количество элементов массива: 8)

// const arr = [];
// for (let i = 0; arr.length < 8; i++) {
//   if (i % 3 === 0) {
//     arr[arr.length] = i;
//   }
// }
// console.log(arr);