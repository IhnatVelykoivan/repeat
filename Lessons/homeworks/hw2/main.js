//#WpkK0ZH1
// let arr = [
//     {nums: [11, 22, 33, 44, 55]},
//     {boolean: [false,true,false,false,true]},
//     {mix:['asd',22,true,11,'zxc']}
// ]
// console.log(arr);

//#4aDbSgh
// let arr = [];
// arr[0] = 'apple';
// arr[1] = 42;
// arr[2] = true;
// arr[3] = { name: 'John', age: 30 };
// arr[4] = [1, 2, 3];
// console.log(arr)

// let arr = [];
// arr.push('qwerty',true,22)
// console.log(arr)

// #qLQLJSeN7i
// let arr = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
// let i = 0;
// while (i<(arr.length)){
//     let num = arr[i];
//     console.log(num);
//     i++;
// }
// do {
//     console.log('')
// } while (false)

// 2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i += 2;
// }

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i<arr.length){
//     let num = arr[i];
//     if (num%2===0){
//         console.log(num);
//     }
//     i++;
// }
// do {
//     console.log(' ')
// } while (false)

//6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//         if (arrElement%2===0){
//             console.log(arrElement);
//         }
// }

//7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);

// 7. замінити кожне число кратне 3 на слово "okten"
// let i = 0;
// while (i<arr.length){
//     let num = arr[i];
//     if (num %3===0){
//         console.log('okten')
//     }
//     i++;
// }
// do {
//     console.log(' ')
//
// }while (false)

//8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let i = arr.length - 1;
// while (i >= 0) {
//     let num = arr[i];
//     if (num % 3 === 0) {
//         console.log('okten');
//     }
//     i--;
// }
//
// do {
//     console.log('');
// } while (false);

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//         if (arrElement%2===0){
//             console.log(arrElement);
//         }
// }

// let i = arr.length - 1;
// while (i >= 0) {
//     let num = arr[i];
//     if (num%2===0){
//         console.log(num);
//     }
//     i--;
// }
// do {
//     console.log(' ')
// } while (false)
//


// function viewElements(argument) {
//     for (let i = 0; i < argument.length; i++) {
//     console.log(argument[i]);
//     }
// }

// function viewBoolean(argument) {
//     for (let i = 0; i < argument.length; i++) {
//         let item = argument[i]
//         if (typeof item === 'boolean') {
//             console.log(item);
//         }
//     }
// }

// function viewNums(value) {
//     for (let i = 0; i < value.length; i++) {
//         if (typeof value[i] === 'number') {
//             console.log(value[i]);
//         }
//     }
// }

// function viewString(value) {
//     for (let i = 0; i < value.length; i++) {
//         if (typeof value[i] === 'string') {
//             console.log(value[i]);
//         }
//     }
// }

// function forViewer(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i]);
//     }
// }

// function viewNonNumeric(value) {
//     for (let i = 0; i < value.length; i++) {
//         if (typeof value[i] !== 'number') {
//             console.log(value[i]);
//         }
//     }
// }


// let arr = [70, 20, 20, 70, 20, 20, 70, 20, 70, 20];
// let arr = ["apple", "banana", "mac", "date", "elderberry", "fig", "grape", "linux", "kiwi", "lemon"];
// let arr = [42, "apple", true, {name: "John Doe", age: 30}, [1, 2, 3], null, undefined, 3.14, "binance", -18];


