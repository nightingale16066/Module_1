'use strict';

{
    const goodName = prompt('Введите наименование товара');
    const goodAmount = +prompt('Введите количество товара');
    const goodCategory = prompt('Введите категори товара');
    const goodPrice = +prompt('Введите цену товара');

    if (Number.isFinite(goodAmount) && Number.isFinite(goodPrice)) {
        console.log(typeof goodName);
        console.log(typeof goodAmount);
        console.log(typeof goodCategory);
        console.log(typeof goodPrice);

        console.log(`На складе ${goodAmount} единицы товара "${goodName}" на сумму ${goodAmount * goodPrice} деревянных`);
    } else {
        alert('Вы ввели некорректные данные');
    }    
}