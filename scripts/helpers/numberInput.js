function chooseNumberBetween(userMessage, min, max) {
  let number;
  do {
    number = parseInt(prompt(userMessage));
    if (number < min || number > max) {
      alert(
        `Pogrešan unos van granica: ${min} - ${max}\nZa izlaz ostavi unos prazan`
      );
    }
  } while (number < min || number > max);
  return number;
}

export { chooseNumberBetween };
