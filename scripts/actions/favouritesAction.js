function favouritesAction(programList, idToChange) {
  let programThatChanges = programList.find(
    (program) => program.id === idToChange
  );
  let confirmString = programThatChanges.favourite
    ? "Ukloniti iz favorita?"
    : "Dodati u favorite";
  if (confirm(confirmString)) {
    programThatChanges.favourite = !programThatChanges.favourite;
    localStorage.setItem("programs", JSON.stringify(programList));
  }
  return;
}
export { favouritesAction };
