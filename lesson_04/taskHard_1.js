'use strict';

{
    const income = +prompt('Введите полученный заработок: ');
    let tax = 0;

    if (income > 0 && income <= 15000) {
        tax = 0.13;
    } else if (income > 15000 && income <= 50000) {
        tax = 0.2;
    } else if (income > 50000){
        tax = 0.3;
    }

    console.log(`Налог составляет ${income * tax}₽`);
}