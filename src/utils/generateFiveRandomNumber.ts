function generateRandomNumberBetwenOneAndFifty() {
  const min = 1;
  const max = 50;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateFiveRandomNumber() {
  const randomNumbers = [];
  Array.from({ length: 5 }).forEach(() => {
    randomNumbers.push(generateRandomNumberBetwenOneAndFifty());
  });

  return randomNumbers;
}
