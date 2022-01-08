const checkTheAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return true;
  }
  return false;
};
const end = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}`);
};
const randomNum = (n) => Math.floor(Math.random() * n);
export { checkTheAnswer, end, randomNum };
