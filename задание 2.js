//Задание №2. Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkProperty(obj, propertyName) {
  // Проверяем, существует ли свойство с данным именем в объекте
  return obj.hasOwnProperty(propertyName);
}

// Пример 
const $Object = {
  name: 'Alice',
  age: 25,
  city: 'London'
};

const propertyToCheck = 'age';
const result = checkProperty($Object, propertyToCheck);

console.log(result); // Выведет true, так как свойство 'age' существует в объекте