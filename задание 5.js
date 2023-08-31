// pзадание 5. 

class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  togglePower() {
    this.pluggedIn = !this.pluggedIn;
    if (this.pluggedIn) {
      console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
    } else {
      console.log(`${this.name} выключен.`);
    }
  }
}

class DeskLamp extends ElectricalAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  adjustBrightness(brightness) {
    this.brightness = brightness;
    console.log(`${this.name}: Уровень яркости установлен на ${this.brightness}`);
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }

  runProgram(program) {
    console.log(`${this.name} запускает программу: ${program}`);
  }
}

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
