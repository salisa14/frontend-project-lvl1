import {
  randomNum, welcome, win, winOrLose, question, rounds,
} from '../index.js';

const checkTheNum = (givenNum) => {
  if (givenNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  let counter = 0;
  let correctAnswer = '';
  let givenNum = 0;
  let value = '';

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = welcome(description);
  while (counter < rounds) {
    givenNum = randomNum(100);
    correctAnswer = checkTheNum(givenNum);
    value = `${givenNum}`;
    question(value);
    counter = winOrLose(correctAnswer, name, counter);
  }
  return win(name, counter, rounds);
};
export default evenGame;
