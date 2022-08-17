'use strict';

{
    const income = +prompt('Введите полученный заработок: ');
    let tax = 0;
    let taxPart = 0;

    if (income > 0 && income < 15000) {
        tax = 0.13;
        taxPart = income;
    } else if (income >= 15000 && income < 50000) {
        tax = 0.2;
        taxPart = income - 15000;
    } else if (income >= 50000){
        tax = 0.3;
        taxPart = income - 50000;
    }

    console.log(`Налог составляет ${taxPart * tax}₽`);
}