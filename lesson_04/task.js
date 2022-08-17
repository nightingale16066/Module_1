'use strict';

{
    const rain = Math.round(Math.random());

    console.log(`${rain ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!'}`);
}

{
    const math = +prompt('Введите кол-во баллов по математике: ');
    const ru = +prompt('Введите кол-во баллов по русскому языку: ');
    const info = +prompt('Введите кол-во баллов по информатике: ');
    const total = math + ru + info;

    if (total >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else {
        console.log('К сожалению, у вас не хватает баллов для поступления на бюджет');
    }
}

{
    const loan = +prompt('Введите сумму заема: ');

    if (!(loan % 100)) {
        console.log('Заберите деньги');
    } else {
        console.log('Банкомат может выдавать минимальные купюры номиналом 100р');
    }
}