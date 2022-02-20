function chooseNumberBetween(userMessage, min, max) {
  do {
    number = parseInt(prompt(userMessage));
  } while (number < min || number > max);
  return number;
}

export { chooseNumberBetween };
