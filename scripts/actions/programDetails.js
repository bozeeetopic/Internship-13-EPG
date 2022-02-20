import { category } from "../enums/category.js";

function programDetails(program, channel) {
  if (program.category === category.ero) {
    let pin = localStorage.getItem("pin");
    pin = pin ? pin : "1111";

    let userPinInput = prompt("Unesite trenutni pin:");

    pin == userPinInput
      ? alert(program.prettyPrint(channel.name))
      : alert("Krivo unesen pin, pristup zabranjen!");
    return;
  }
  alert(program.prettyPrint(channel.name));
}
