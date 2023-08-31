// pзадание 4. 

// Родительский 
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Метод для включения/выключения прибора
ElectricalAppliance.prototype.togglePower = function() {
  this.pluggedIn = !this.pluggedIn;
  if (this.pluggedIn) {
    console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
  } else {
    console.log(`${this.name} выключен.`);
  }
};

// Настольная лампа
function DeskLamp(name, power, brightness) {
  ElectricalAppliance.call(this, name, power);
  this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Метод для регулировки яркости
DeskLamp.prototype.adjustBrightness = function(brightness) {
  this.brightness = brightness;
  console.log(`${this.name}: Уровень яркости установлен на ${this.brightness}`);
};

// Компьютер
function Computer(name, power, brand) {
  ElectricalAppliance.call(this, name, power);
  this.brand = brand;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Метод для запуска программы
Computer.prototype.runProgram = function(program) {
  console.log(`${this.name} запускает программу: ${program}`);
};

// Создание экземпляров приборов
const myDeskLamp = new DeskLamp('Настольная лампа', 20, 'средний');
const myComputer = new Computer('Компьютер', 300, 'Dell');

// Включение и использование приборов
myDeskLamp.togglePower();
myDeskLamp.adjustBrightness('высокий');

myComputer.togglePower();
myComputer.runProgram('Photoshop');

// Подсчет потребляемой мощности
const appliances = [myDeskLamp, myComputer];
let totalPower = 0;

for (const appliance of appliances) {
  if (appliance.pluggedIn) {
    totalPower += appliance.power;
  }
}

console.log(`Общая потребляемая мощность: ${totalPower} Вт`);
