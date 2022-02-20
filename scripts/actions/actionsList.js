import { actionType } from "../enums/actionType.js";

let actionsList = [
  { name: "Idi na prošli kanal", function: actionType.channelUp },
  { name: "Idi na idući kanal", function: actionType.channelDown },
  {
    name: "Pogledaj prethodnu emisiju na trenutnom kanalu",
    function: actionType.previousProgram,
  },
  {
    name: "Pogledaj iduću emisiju na trenutnom kanalu",
    function: actionType.nextProgram,
  },
  {
    name: "Dodaj/ukloni emisiju iz favorita",
    function: actionType.favouriteAction,
  },
  { name: "Dodaj ocjenu na emisiju", function: actionType.addRating },
  { name: "Pogledaj detalje emisije", function: actionType.programDetails },
  { name: "Promjeni roditeljski pin", function: actionType.changePin },
  { name: "Pogledaj sve favorite", function: actionType.favourites },
  { name: "Izlaz", funtion: actionType.exit },
];

export { actionsList };
