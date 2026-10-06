/*
const storeItems = [
  { name: "ноутбук", price: 50000, quantity: 5 },
  { name: "мышка", price: 1500, quantity: 15 },
  { name: "клавиатура", price: 3000, quantity: 10 }
];

function buyItem(itemName, count) {
  const item = storeItems.find(p => p.name == itemName);

  if (!item) {
    return "Товар не найден!";
  }

  if (count > item.quantity) {
    return `Недостаточно товара! В наличии только ${item.quantity} шт.`;
  }

  const totalCost = item.price * count;
  
  item.quantity -= count; 

  return `Вы купили ${item.name} (${count} шт.). Общая стоимость: ${totalCost} грн.`;
}

console.log(buyItem("мышка", 3)); 
console.log(buyItem("ноутбук", 10)); 
*/


/*
const workoutTracker = [];

function addWorkout(sportType, durationMinutes, caloriesBurned) {
  workoutTracker.push({
    sport: sportType,
    duration: durationMinutes,
    calories: caloriesBurned
  });
}

function showStats() {
  let totalDuration = 0;
  let totalCalories = 0;

  for (const workout of workoutTracker) {
    totalDuration += workout.duration;
    totalCalories += workout.calories;
  }

  console.log(`--- Статистика тренировок ---`);
  console.log(`Всего тренировок: ${workoutTracker.length}`);
  console.log(`Общая продолжительность: ${totalDuration} мин.`);
  console.log(`Всего сожжено калорий: ${totalCalories} ккал.`);
}

addWorkout("Бег", 45, 400);
addWorkout("Плавание", 60, 500);
addWorkout("Йога", 30, 150);

showStats();
*/


/*
const player = {
  name: "Neo",
  level: 42,
  score: 8500,
  achievements: ["Первая кровь", "Мастер скрытности", "Перфекционист"],
  
  showProfile: function() {
    console.log(`--- Профиль игрока ---`);
    console.log(`Имя: ${this.name}`);
    console.log(`Уровень: ${this.level}`);
    console.log(`Очки: ${this.score}`);
    console.log(`Достижения: ${this.achievements.join(", ")}`);
  }
};

player.showProfile();
*/
