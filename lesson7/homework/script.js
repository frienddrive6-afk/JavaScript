// Задание 1
// let flag = true;
// let expenses = []; 

// function printArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log("Куда потрачено - " + array[i].text + ". Потрачено - " + array[i].countMoney + " грн.");
//     }
// }

// function flagOne() {
//     let txt = prompt("На что тратили?");
//     let countMoney = prompt("Сколько потратили?");
//     expenses.push({
//         text: txt,
//         countMoney: countMoney
//     });
// }

// function flagTwo() {
//     let countFullMoney = Number(0);
//     for (let i = 0; i < expenses.length; i++) {
//         countFullMoney += Number(expenses[i].countMoney);
//     }
//     printArray(expenses);
//     console.log("\nВсего потрачено: " + countFullMoney + " грн.");
// }

// while (flag) {
//     let flag2 = prompt("Вы тратили на что-то деньги? 0 - нет / 1 - да");
//     if (flag2 == 1) {
//         flagOne();
//     } else {
//         flagTwo();
//         flag = false;
//     }
// }



// Задание 2
// const arr = [
//     { name: "Capybara", quantity: 5, price: 500 },
//     { name: "Crocodile", quantity: 2, price: 1000 },
//     { name: "Elephant", quantity: 1, price: 1500 },
//     { name: "Giraffe", quantity: 3, price: 2000 },
//     { name: "Hippopotamus", quantity: 4, price: 2500 }
// ];


// function total() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].quantity * arr[i].price; 
//     }
//     return sum;
// }

// for (let i = 0; i < arr.length; i++) {
//     const { name, quantity, price } = arr[i];
//     console.log(`${name}: ${quantity} шт. по ${price} грн`);
// }

// console.log(`общая стоимость: ${total()} грн`);



//Задание 3

// const students = [
//     { name: "Олег", grades: [5, 4, 5, 3] },
//     { name: "Анна", grades: [5, 5, 4, 5] },
//     { name: "Иван", grades: [3, 4, 3, 4] }
// ];

// for (let i = 0; i < students.length; i++) {
//     let currentStudent = students[i];
//     let sum = 0;

//     for (let j = 0; j < currentStudent.grades.length; j++) {
//         sum = sum + currentStudent.grades[j];
//     }

//     let average = sum / currentStudent.grades.length;

//     console.log(currentStudent.name + ": средняя оценка = " + average);
// }



// Задание 4
// const movies = [
//     { title: "Мультфильм Ковчег", genre: "Анимация", ageLimit: 0 },
//     { title: "Человек-паук", genre: "Экшен", ageLimit: 12 },
//     { title: "Дэдпул", genre: "Комедия/Боевик", ageLimit: 18 },
//     { title: "Интерстеллар", genre: "Фантастика", ageLimit: 12 }
// ];

// let userAge = parseInt(prompt("Введите ваш возраст:"));

// console.log("Доступные вам фильмы:");

// for (let i = 0; i < movies.length; i++) {
//     let currentMovie = movies[i];

//     if (userAge >= currentMovie.ageLimit) {
//         console.log("- " + currentMovie.title + " (" + currentMovie.genre + ")");
//     }
// }

