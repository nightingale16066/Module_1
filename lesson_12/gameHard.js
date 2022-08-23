const gameHard = () => {
  const firstBorder = +prompt('Введите первое число');
  const secondBorder = +prompt('Введите второе число');
  const attempts = Math.floor(Math.abs(firstBorder - secondBorder) * 0.3);
  const randomNumber = Math.floor(Math.random() *
    (Math.abs(firstBorder - secondBorder) + 1) +
    Math.min(firstBorder, secondBorder));

  const isNumber = (num) => Number.isFinite(num);

  const hasAlready = (number, arr) => arr.includes(number);

  const getNumber = (arr) => {
    const userInput = +prompt('Введите число: ');
    if (isNumber(userInput)) {
      if (hasAlready(userInput, arr)) {
        alert('Это число вы уже вводили.');
        return getNumber(arr);
      } else {
        arr.push(userInput);
        return userInput;
      }
    } else {
      alert('Нужно ввести число!');
      return getNumber(arr);
    }
  };

  const checkNumber = (userNum, randomNum, answers) => {
    if (userNum === randomNum) {
      alert('Правильно!');
    } else if (answers.length >= attempts) {
      alert('Количество доступных попыток исчерпано');
    } else if (userNum === 0) {
      alert('End of the game');
    } else if (userNum > randomNum) {
      alert('Меньше!');
    } else if (userNum < randomNum) {
      alert('Больше!');
    }
  };

  const gameBot = (arr, random) => {
    const userAnswer = getNumber(arr);
    checkNumber(userAnswer, random, arr);
    if (userAnswer !== 0 && userAnswer !== random && arr.length < attempts) {
      gameBot(arr, random);
    }
  };

  gameBot([], randomNumber);
};

gameHard();
