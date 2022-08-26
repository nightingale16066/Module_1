(() => {
  const checkInput = (userInput, playerScore) => {
    if (userInput) {
      // eslint-disable-next-line max-len
      return !(userInput <= playerScore && userInput > 0) ? 'forbiddenNumbers' : true;
    } else if (userInput === null) {
      return 'exit';
    } else {
      return 'blankInput';
    }
  };

  const setLevel = () => {
    // eslint-disable-next-line max-len
    const levelType = prompt('Выберите уровень сложности из проедложенных:\nлегкий, средний, сложный');
    if (!levelType) {
      alert('Вы ничего не ввели. Необходимо выбрать уровень сложности');
      return setLevel();
    // eslint-disable-next-line max-len
    } else if (['легкий', 'средний', 'сложный'].includes(levelType.toLocaleLowerCase())) {
      return levelType.toLocaleLowerCase();
    } else {
      return setLevel();
    }
  };

  const botGuess = () => Math.floor(Math.random() * 2);

  const botChooseNumber = (topBorder) =>
    Math.floor(Math.random() * topBorder + 1);

  const checkBotIsRight = (userChoice) => {
    const botSay = botGuess();
    alert(`Я думаю у тебя ${botSay ? 'нечетное' : 'четное'}`);
    return userChoice % 2 === botSay;
  };

  const checkUserIsRight = (botChoice) =>
    !(botChoice % 2) === confirm('Число четное?');

  const setTurns = (level) => {
    if (level === 'средний') {
      return 0;
    } else if (level === 'сложный') {
      return window.RPS()();
    }
  };

  const game = () => {
    let level = setLevel();
    let whoseTurn = setTurns(level);

    const result = {
      bot: 5,
      player: 5,
    };

    const reset = () => {
      result.player = 5;
      result.bot = 5;
      level = setLevel();
      whoseTurn = setTurns(level);
    };

    const showResults = () => {
      alert(`Количество шариков\nБот: ${result.bot}\nИгрок: ${result.player}`);
    };

    return function start() {
      if (!(whoseTurn % 2)) {
        console.log('whoseTurn: ', whoseTurn);
        const userChoice = prompt(`Введите число от 1 до ${result.player}`);
        const inputCheck = checkInput(userChoice, result.player);

        if (inputCheck === 'exit') {
          if (!confirm('Точно хотите выйти')) {
            start();
          } else {
            showResults();
            return;
          }
        } else if (inputCheck === 'blankInput') {
          // eslint-disable-next-line max-len
          alert(`Вы ничего не ввели, необходимо ввести число от 1 до ${result.player}`);
          start();
        } else if (inputCheck === 'forbiddenNumbers') {
          alert('Введенное число выходит за разрешенные границы');
          start();
        } else {
          if (level !== 'легкий') {
            whoseTurn += 1;
          }
          if (checkBotIsRight(userChoice)) {
            alert('О да, я угадал');
            result.bot += +userChoice;
            result.player -= +userChoice;
            if (result.player > 0) {
              start();
            } else {
              alert('Вы проиграли');
              if (confirm('Сыграем еще разок?')) {
                reset();
                start();
              } else {
                return;
              }
            }
          } else {
            alert('Упс, ошибочка вышла');
            result.bot -= +userChoice;
            result.player += +userChoice;
            if (result.bot > 0) {
              start();
            } else {
              alert('Вы выйграли');
              if (confirm('Сыграем еще разок?')) {
                reset();
                start();
              } else {
                return;
              }
            }
          }
        }
      } else if (level !== 'легкий' && whoseTurn % 2) {
        whoseTurn += 1;
        alert('Теперь я загадаю число, а ты попробуй угадай');
        const botChoice = botChooseNumber(result.bot);
        console.log(result.bot);
        console.log('botChoice: ', botChoice);
        if (checkUserIsRight(botChoice)) {
          alert(`О нет, ты угадал. Это было ${botChoice}`);
          result.bot -= botChoice;
          result.player += botChoice;
          if (result.bot > 0) {
            start();
          } else {
            alert('Вы выйграли');
            if (confirm('Сыграем еще разок?')) {
              reset();
              start();
            } else {
              return;
            }
          }
        } else {
          alert(`Ха ха, не угадал. Я загадал ${botChoice}`);
          result.bot += botChoice;
          result.player -= botChoice;
          if (result.player > 0) {
            start();
          } else {
            alert('Вы проиграли');
            if (confirm('Сыграем еще разок?')) {
              reset();
              start();
            } else {
              return;
            }
          }
        }
      }
    };
  };

  window.marbles = game;
})();
