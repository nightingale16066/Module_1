'use strict';

const task05 = () => {
    const isNumber = (num) => {
        return Number.isFinite(num);
    }

    const getNumber = () => {
        let userInput = +prompt('Введите число: ');
        if (isNumber(userInput)) {
            return userInput;
        } else {
            alert('Нужно ввести число!')
            return getNumber();
        }
    }

    const gameBot = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        let userAnswer = getNumber();

        while (true) {
            if (userAnswer === 0) {
                alert('End of the game');
                break;
            } else if (userAnswer === randomNumber) {
                alert('Правильно!');
                break;
            } else if (userAnswer > randomNumber) {
                alert("Меньше!");
                userAnswer = getNumber();
            } else if (userAnswer < randomNumber) {
                alert("Больше!");
                userAnswer = getNumber();
            }
        }
    }

    gameBot();
}

task05();