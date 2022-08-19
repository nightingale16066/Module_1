'use strict';

const isNumber = (num) => {
    return Number.isFinite(num);
}

const hasAlready = (number, arr) => {
    return arr.includes(number);
}

const getNumber = (arr) => {
    let userInput = +prompt('Введите число: ');
    if (isNumber(userInput)) {
        if (hasAlready(userInput, arr)) {
            alert('Это число вы уже вводили.');
            return getNumber(arr);
        } else {
            arr.push(userInput);
            return userInput;
        }
    } else {
        alert ('Нужно ввести число!');
        return getNumber(arr);
    }
}

const gameBot = () => {
    const firstBorder = +prompt('Введите первое число');
    const secondBorder = +prompt('Введите второе число');
    let answers = [];

    const randomNumber = Math.floor(Math.random() * (Math.abs(firstBorder - secondBorder) + 1) +
        Math.min(firstBorder, secondBorder));


    
    let userAnswer = getNumber(answers);
    answers = [userAnswer];

    while (true) {
        if (userAnswer === randomNumber) {
            alert('Правильно!');
            break;
        } else if (answers.length >= Math.floor(Math.abs(firstBorder - secondBorder) * 0.3)) {
            alert('Количество доступных попыток исчерпано');
            break;
        } else if (userAnswer === 0) {
            alert('End of the game');
            break;
        } else if (userAnswer > randomNumber) {
            alert("Меньше!");
            userAnswer = getNumber(answers);
        } else if (userAnswer < randomNumber) {
            alert("Больше!");
            userAnswer = getNumber(answers);
        } 
    }
}

gameBot();
