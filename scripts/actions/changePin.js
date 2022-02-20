function changePin() {
  let pin = localStorage.getItem("pin");
  pin = pin ? pin : "1111";

  let userPinInput = prompt("Unesite trenutni pin!");

  if (pin == userPinInput) {
    do {
      userPinInput = prompt("Unesite novi pin!");
    } while (
      userPinInput.length < 4 ||
      userPinInput.length > 8 ||
      !userPinInput.match(/^[0-9]*$/)
    );
    localStorage.setItem("pin", userPinInput);
    return;
  }
  alert("Krivo unesen pin!");
}

export { changePin };
