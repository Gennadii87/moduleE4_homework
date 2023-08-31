//Задание №3. Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObject() {
  return Object.create(null);
}

// Создаем пустой объект без прототипа
const emptyObject = createEmptyObject();

// Проверяем, что объект действительно не имеет прототипа
console.log(Object.getPrototypeOf(emptyObject)); // Выведет null