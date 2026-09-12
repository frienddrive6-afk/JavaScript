// Пример 1
let ageInput = prompt("Введите ваш возраст:");
let age = Number(ageInput);
let hasPass = confirm("У вас есть VIP-пропуск?");

if ((age >= 18 && hasPass) || age >= 21) {
    alert("Добро пожаловать в клуб!");
} else if (!hasPass) {
    alert("Вход воспрещен: нужен VIP-пропуск или возраст от 21 года.");
} else {
    alert("Вход воспрещен: вам нет 18 лет.");
}

// Пример 2
let totalAmount = Number(prompt("Введите сумму покупки:"));
let isMember = confirm("У вас есть карта постоянного клиента?");

if (totalAmount >= 1000 || (totalAmount >= 500 && isMember)) {
    alert("Поздравляем! Вы получаете скидку 15%.");
} else {
    alert("Скидка не применена. Добавьте товаров или предъявите карту.");
}

// Пример 3
let login = prompt("Придумайте логин:");
let pass = prompt("Придумайте пароль:");

if (!login || !pass) {
    alert("Ошибка: Логин и пароль не могут быть пустыми!");
} else if (login === "admin" || pass.length < 6) {
    alert("Ошибка: Имя 'admin' занято или пароль слишком короткий (нужно от 6 символов).");
} else {
    alert(`Регистрация успешна! Добро пожаловать, ${login}.`);
}