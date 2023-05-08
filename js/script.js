// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// - read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// - sum() повертає суму цих властивостей.
// - mul() повертає результат множення даних властивостей.


// function Calculator() {
//   this.firstValue = 0;
//   this.secondValue = 0;

//   this.read = function () {
//     this.firstValue = +prompt('Введіть перше число:',);
//     this.secondValue = +prompt('Введіть друге число:',);
//   };

//   this.sum = function () {
//     return this.firstValue + this.secondValue;
//   };

//   this.mul = function () {
//     return this.firstValue * this.secondValue;
//   };
// }

// const caurrentCalc = new Calculator();
// caurrentCalc.read();
// alert(`Сума = ${caurrentCalc.sum()}, Добуток = ${caurrentCalc.mul()}`);
