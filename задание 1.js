//Задание №1. Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function printOwnProperties(obj) {
  // Перебираем все ключи в объекте obj
  for (let key in obj) {
    // Проверяем, является ли ключ собственным свойством объекта
    if (obj.hasOwnProperty(key)) {
      // Выводим в консоль ключ и соответствующее значение
      console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
    }
  }
}

// Пример 
const myObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Вызываем функцию, передавая ей объект myObject
printOwnProperties(myObject);
