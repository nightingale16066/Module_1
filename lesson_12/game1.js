const game1 = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  const isNumber = (num) => Number.isFinite(num);

  const getNumber = () => {
    const userInput = +prompt('Введите число: ');
    if (isNumber(userInput)) {
      return userInput;
    } else {
      alert('Нужно ввести число!');
      return getNumber();
    }
  };

  const checkNumber = (userNum, randomNum) => {
    if (userNum === randomNum) {
      alert('Правильно!');
    } else if (userNum === 0) {
      alert('End of the game');
    } else if (userNum > randomNum) {
      alert('Меньше!');
    } else if (userNum < randomNum) {
      alert('Больше!');
    }
  };

  const gameBot2 = (random) => {
    const userAnswer = getNumber();
    checkNumber(userAnswer, random);
    if (userAnswer !== 0 && userAnswer !== random) {
      gameBot2(random);
    }
  };

  gameBot2(randomNumber);
};

game1();
