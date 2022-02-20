import { chooseNumberBetween } from "../helpers/numberInput.js";

function addRating(programList, idToChange) {
  let programThatChanges = programList.find(
    (program) => program.id === idToChange
  );

  let rating = chooseNumberBetween("Ocjeni program:", 0, 10);
  if (rating == null || rating == undefined) {
    return;
  }
  programThatChanges.rating = rating;
  localStorage.setItem("programs", JSON.stringify(programList));
}
export { addRating };
