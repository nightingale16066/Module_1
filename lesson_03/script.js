'use strict';

// {
//     const goodName = 'Samsung Galaxy Buds 2';
//     const goodAmount = 4;
//     const goodCategory = 'Headphones';
//     const goodPrice = 10000;

//     console.log('goodName: ', goodName);
//     console.log(`Total cost: ${goodAmount * goodPrice}`);
// }

// {
//     const goodName = 'Samsung Galaxy Note 10';
//     const goodAmount = 2;
//     const goodCategory = 'Смартфон';
//     const goodPrice = 49990;

//     console.log('goodName: ', goodName);
//     console.log(`Total cost: ${goodAmount * goodPrice}`);
// }

{
    const goodName = prompt('Введите наименование товара');
    const goodAmount = +prompt('Введите количество товара');
    const goodCategory = prompt('Введите категори товара');
    const goodPrice = +prompt('Введите цену товара');

    console.log(typeof goodName);
    console.log(typeof goodAmount);
    console.log(typeof goodCategory);
    console.log(typeof goodPrice);

    console.log(`На складе ${goodAmount} единицы товара "${goodName}" на сумму ${goodAmount * goodPrice} деревянных`);
}