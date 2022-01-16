import readlineSync from 'readline-sync';

const checkTheAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return true;
  }
  return false;
};

const randomNum = (n) => Math.floor(Math.random() * n);

const letsPlay = (description, expressionAndAnswer) => {
  let counter = 0;
  const rounds = 3;
  let answer = '';
  let isCorrect = true;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  while (counter < rounds) {
    const value = expressionAndAnswer();
    const expression = value[0];
    console.log(`Question: ${expression}`);
    const correctAnswer = value[1];
    answer = readlineSync.question('Your answer: ');
    isCorrect = checkTheAnswer(answer, correctAnswer);
    if (isCorrect) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export { randomNum, letsPlay };
