// Пример 1
// let cartCount = 0; 
// let isLogIn = false; 

// if (!isLogIn) {
//     console.log("Пожалуйста, войдите в аккаунт для сохранения корзины.");
// }

// if (cartCount > 0) {
//     console.log("Кнопка 'Оформить заказ' активна.");
// } else if (cartCount === 0) { 
//     console.log("Корзина пуста. Добавьте товары.");
// }


// Пример 2
// let userAgeInput = "18"; 
// let promoCode = "";    

// if (userAgeInput == 18) {
//     console.log("Доступ к фильмам 18+ открыт.");
// }

// if (userAgeInput === 18) {
//     console.log("Типы совпали точно.");
// } else {
//     console.log("Ошибка: Система ожидала число, а получила строку!");
// }

// if (promoCode === "") {
//     console.log("Промокод не применен, цена стандартная.");
// }



// Пример 3

let username = "";
let password = "Qwerty123";
let confirmPassword =  "Qwerty1234";

let selectedInterests = "\"Программирование\", \"Дизайн\"";


if (username != "") {
    console.log("Ошибка: Имя пользователя не может быть пустым!");
}

if (password !== confirmPassword) {
    console.log("Ошибка: Пароли не совпадают!");
}

if (selectedInterests.length !== 0) {
    console.log(`Выбрано интересов: ${selectedInterests.split(",").length}. Подбираем рекомендации...`);
}