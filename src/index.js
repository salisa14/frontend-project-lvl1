import readlineSync from 'readline-sync';

const rounds = 3;
const checkTheAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return true;
  }
  return false;
};
const welcome = (question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);
  return name;
};
const question = (value) => {
  console.log(`Question: ${value}`);
};
const end = (answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};
const winOrLose = (correctAnswer, name, counter) => {
  const answer = readlineSync.question('Your answer: ');
  const isCorrect = checkTheAnswer(answer, correctAnswer);
  let attempt = counter;
  if (isCorrect) {
    console.log('Correct!');
    attempt += 1;
  } else {
    return end(answer, correctAnswer, name);
  }
  return attempt;
};
const randomNum = (n) => Math.floor(Math.random() * n);
const win = (player, counter, chance) => {
  if (counter === chance) {
    return console.log(`Congratulations, ${player}!`);
  }
  return console.log(`Let's try again, ${player}!`);
};
export {
  randomNum, welcome, winOrLose, win, question, rounds,
};
