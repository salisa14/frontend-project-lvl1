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
const randomNum = () => Math.floor(Math.random() * 100);
export { checkTheAnswer, end, randomNum };
