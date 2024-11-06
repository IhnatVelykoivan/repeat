// let a, b , c;
// a = 'hello';
// b = 'okten!'
// c = 'owu.com.ua';
//
// console.log(a,b,c)
//
// let person = [{
//     middleName : 'Velykoivan',
//     firstName : 'Ihnat',
//     secondName : 'Oleksandrovich'
// }
// ];
//
// console.log(typeof person,person)
// // let a = 100;
// // console.log(typeof(a), a);
//
// let middleName = 'Velykoivan';
// let firstName = 'Ihnat';
// let secondName = 'Oleksandrovich';
//
// let student = `${middleName} ${firstName} ${secondName}`;
// console.log(student);
//
// let middle = prompt('enter your middleName');
// let first = prompt('enter your firstName');
// let second = prompt('enter your secondName');
// let somePersone = `${middle} ${first} ${second}`
// // console.log(middle,first,second)
// console.log(somePersone)

// let array = ['some1', 'some2', 'some3', 'some4', 'some5', 'some6', 'some7', 'some8', 'some9', 'some10'];
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array);
//
// let amazonBook = {
//     title: 'Whispers of the Forgotten'
//     price: '$ 9,99',
//     pageCount: 15,
//     genre: 'mystic',
//     author:{
//         age: 43,
//         name: 'Akash',
//         surname:'Waghmode'}}
// console.log(amazonBook);


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

//  function viewUsers (){
//      for (const user of users) {
//          console.log(user)
//      }
// }
//
// viewUsers()

// function viewer() {
//     for (const argument of arguments) {
//         console.log(argument)
//     }
// }
// viewer(users);

// let week = [
//     {day: 'Sunday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Monday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Tuesday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Wednesday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Thursday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Friday', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']},
//     {day: 'Sabbath', morning: [5,'°C'], afternoon: [7, '°C'], evening: [10, '°C']}
// ];
// console.log(week);

// function f(x) {
//
//     if (x >= 1){
//         console.log(true)
//     }else if (x === 0) {
//         console.log(false)
//     }else if (x <= -1) {
//         console.log(false)
//     } else {
//         console.log('error')
//     }
// }
// f();

// function f(time) {
//     if (time <! 0 ){
//         console.log('more time')
//     }else if (time <= 15){
//         console.log('first half hour')
//     }else if (time <= 30){
//         console.log('second half hour')
//     }else if (time <= 45){
//         console.log('third half hour')
//     }else if (time <= 60){
//         console.log('fourth half hour')
//     }else {
//         console.log('error')
//     }
// }
//
// f();


// function calendar(day) {
//     if (day <! 0 ){
//     console.log('zero')
//     }else if (day <= 11){
//     console.log('first decade of the month')
//     }else if (day <= 21){
//     console.log('second decade of the month')
//     }else if (day <= 31){
//     console.log('third decade of the month')
//     }else{
//     console.log('error')
//     }
// }
//
// calendar();


// function week() {
//     switch (week){
//         case 'Sunday':
//             console.log('chill');
//             break;
//         case 'Monday':
//             console.log('lesson!');
//             break;
//         case 'Tuesday':
//             console.log('cons!');
//             break
//         case 'Wednesday':
//             console.log('lesson!');
//             break;
//         case 'Thursday':
//             console.log('cons!');
//             break;
//         case 'Friday':
//             console.log('lesson!');
//             break
//         case 'Sabbath':
//             console.log('english!');
//             break
//         default:
//             console.log('?????');
//     }
// }
//
// week();

// const x = +prompt();
// const y = +prompt();
// const global = x||y;
// if (x > y) {
//     console.log(x);
// }else if (x < y){
//     console.log(y)
// }else if (x === y){
//     console.log(global)
// }else{
//     console.log('error')
// }


// function checker() {
//     switch (checker) {
//         case null:
//         case undefined:
//         case 0:
//             break
//         default:
//             console.log('default')
//     }
// }
//
// checker();

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration>= 5){
//         console.log('goal');
//     }
//     else {
//         console.log('something going wrong')
//     }
//
//     for (const element of coursesAndDurationArray) {
//         if (element.monthDuration>5){
//             console.log('super')
//         } else {
//             console.log('something')
//         }
//     }
//
// }