(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const info = {
    rus: {
      res: 'Результат',
      computer: 'Компьютер',
      user: 'Вы',
      starter: 'камень, ножницы, бумага?',
      preExit: 'Ещё разок?',
      exit: 'Точно ли хотите выйти?',
      notification: {
        win: 'Вы выйграли, первый ход за Вами',
        draw: 'Ничья. Давай переиграем',
        lose: 'Компьютер выйграл, первый ход за ним',
      },
      winTable: {
        win: ['кн', 'бк', 'нб'],
        draw: ['кк', 'бб', 'нн'],
        lose: ['нк', 'кб', 'бн'],
      },
      possibleValues: {
        scissors: ['ножницы', 'нож', 'н'],
        paper: ['бумага', 'б'],
        rock: ['камень', 'к'],
      },
      blankInput: 'Вы ничего не ввели. Попробуйте снова или нажмите Отмена',
    },
  };

  const chooseNotification = (key, notification) => notification[key];

  const getLanguage = language =>
    (language === 'ENG' || language === 'EN' ?
      FIGURES_ENG : FIGURES_RUS);

  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const getFigure = lang => lang[getRandomIntInclusive(0, lang.length)];

  const checkInput = (userInput, possibleValues) => {
    if (userInput) {
      const modifiedInput = userInput.toLowerCase();

      for (const value of Object.values(possibleValues)) {
        if (value.includes(modifiedInput)) {
          return true;
        }
      }
      return false;
    } else if (userInput === null) {
      return 'cancel';
    } else {
      return 'blankInput';
    }
  };

  const gameResult = (me, computer, winTable) => {
    const pair = me[0].toLowerCase() + computer[0];
    for (const [key, value] of Object.entries(winTable)) {
      if (value.includes(pair)) {
        return key;
      }
    }
  };

  // eslint-disable-next-line max-len
  const notifyUser = (user, computer, userChoice, computerChoice, result, notification) => {
    // eslint-disable-next-line max-len
    alert(`${computer}: ${computerChoice}\n${user}: ${userChoice}\n${chooseNotification(result, notification)}`);
  };

  const game = language => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = getLanguage(language);
    const {res, computer, user, exit, starter,
      notification, winTable, possibleValues,
      blankInput} = info.rus;

    const updateResults = (res) => {
      if (res === 'win') {
        result.player += 1;
      } else if (res === 'draw') {
        result.player += 1;
        result.computer += 1;
      } else if (res === 'lose') {
        result.computer += 1;
      }
    };

    const showResults = () => {
      alert(
        `${res}\n ${computer}: ${result.computer}\n ${user}: ${result.player}`);
    };

    return function start() {
      const myChoice = prompt(starter);

      if (!checkInput(myChoice, possibleValues)) {
        return start();
      } else if (checkInput(myChoice, possibleValues) === 'cancel') {
        if (!confirm(exit)) {
          return start();
        } else {
          showResults();
          return;
        }
      } else if (checkInput(myChoice, possibleValues) === 'blankInput') {
        alert(blankInput);
        return start();
      } else {
        const computerChoice = getFigure(lang);
        const gameRes = gameResult(myChoice, computerChoice, winTable);
        updateResults(gameRes);
        // eslint-disable-next-line max-len
        if (result.player > result.computer) {
          alert(notification.win);
          return 0;
        } else if (result.player < result.computer) {
          alert(notification.lose);
          return 1;
        } else {
          // eslint-disable-next-line max-len
          notifyUser(user, computer, myChoice, computerChoice, gameRes, notification);
          return start();
        }
      }
    };
  };

  window.RPS = game;
})();

