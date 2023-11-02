//1) Создать объект myBrowser со свойствами name (значение “Chrome”)
// и version (значение «9.2») - двумя способами

// 1-option

// const myBrowser = {
//     name: 'Chrome',
//     version: '9.2'
// }
// console.log(myBrowser)
//----------------------------------------
// 2-option

// myBrowers = {
//     name: '',
//     version: ''
// };
// myBrowers.name = 'Chrome';
// myBrowers.version = '9.2';
// console.log(myBrowers);
//------------------------------------
// 3-option через конструктор 'Object'
const  myBrowers = new Object({
    name:'Chrome',
    version: '9.2'
})
console.log(myBrowers.name)
//console.log(myBrowers)

// 2  ********************************

//2) Создать объект cinema со свойствами soldTickets (хранит в себе число,
//которое отображает кол-во проданных билетов) и ticketCost (цена билета)
// и задайте значения. Напишите функцию которая высчитывает сколько
// денег заработал кинотеатр за один сеанс.

// const  cinema = {
//     soldTickets: 15,
//     ticketCost: 70
// };
// function resCinema(cinema){
//     return cinema.soldTickets * cinema.ticketCost;
// }
// let resalt = resCinema(cinema);
// console.log(`Сумма   проданных  билетов ${resalt}$!`);

// 3  ************************************************

// 3) Напишите функцию, которая принимает в качестве аргумента объект
// и возвращает вложенный массив вида [[key, value], [key, value]].
// То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), т
// о результатом выполнения должен быть массив - [['a', 1], ['b', 2]].
// Для решения этой задачи вам нужны будут следующие методы:
// Object.keys() или Object.entries()

// const objectKey = {
//     a: 1,
//     b: 2
// };
// function objectToArr(object){
//     return Object.entries(objectKey);
// }
// const qwerty = objectToArr(objectKey);
// console.log(qwerty);

//  4 *****************************************************
// Дан объект. Нужно извлечь число 123 одной строкой

// const  myCrazyObject = {
//     someArray: [7,9,{purpose: 'Путаница', number: 123},3.3],
// }
// console.log(myCrazyObject.someArray[2].number)

//  5 ************************************************
//5) Напишите функцию, которая проверяет,
// является ли элемент именно простым объектом, а не массивом,
// null и т.п. Тут вам пригодится метод Array.isArray()

// const obj = {
//     a: 'o',
//     b: 'p'
// };
// function  objectKeys(){
//      return Array.isArray(obj);
// }
// const newArr = objectKeys(obj);

// 6 *************************************

// Дан массив из имен например ['john', 'jane', 'kate', 'peter'].
// Вывести новый массив в котором каждая первая буква элемента
// будет с большой буквы.

// let firstLetter = ['john', 'jane', 'kate', 'peter'];
// let firstName = firstLetter.map(item => (item.charAt(0).toUpperCase()+ item.slice(1)))

// 7 ************************************************

// Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона,
// и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
// Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.


//
// const  arr = []
// function range(a,b){
//     for (let i = 0; i <= b; i++){
//         arr.push(i)
//     }
// }
// range(1,5)
//
// let resalt = 0;
//     function calc(arr){
//         return arr.forEach(item => {
//             resalt += item
//         });
//     }
// calc(arr)
// console.log(resalt)

//  7 *******************************************

// 8) Найдите квадратный корень из 587.
// Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// Можете все оформить в функцию, которая на входе будет принимать число
// и на выходе отдавать объект

let floor;
let ceil;
function findSquare(num) {
 const square = Math.sqrt(num);
 const floor = Math.floor(square);
 const ceil = Math.ceil(square);
 return {
     floor,
     ceil,
 }
}
const numberObj = {
    floor: [floor],
    ceil: [ceil]
}

console.log(findSquare(587));

//  9 *******************************
//9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь',
// 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки
// такого формата: 'Минск - это Беларусь.'. Для работы понадобится for...in

//const countryCity = {
//    'россия': 'москва',
//    'беларусь': 'минск',
//'украйна': 'киев'
//}
//for (const city in countryCity ){
//    console.log(`${city} - это ${countryCity [city]}.`)
//}