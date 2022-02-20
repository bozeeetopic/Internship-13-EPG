import { Time } from "./data/time.js";
import { programs, channels } from "./data/tvSchedule.js";
import { actionType } from "./enums/actionType.js";
import { actionsList } from "./actions/actionsList.js";
import { chooseNumberBetween } from "./helpers/numberInput.js";

let newDate = new Date();
let timeNow = new Time(
  newDate.getHours(),
  newDate.getMinutes(),
  newDate.getSeconds()
);

let schedule = programs.filter(
  (program) =>
    program.startTime.isEarlierThan(timeNow) &&
    timeNow.isEarlierThan(program.endTime)
);
let currentChannel = 0;
let programList = [...programs];

do {
  let actionString = "Unesi broj uz akciju za njeno izvođenje:\n\n";
  for (let i = 0; i < actionsList.length; i++) {
    actionString += `${i + 1}. - ${actionsList[i].name}\n`;
  }

  choice = chooseNumberBetween(actionString, 1, actionsList.length);

  switch (actionsList[choice - 1].function) {
    case actionType.channelUp:
      currentChannel = currentChannel ? 4 : currentChannel - 1;
      break;

    case actionType.channelDown:
      currentChannel = currentChannel === 4 ? 0 : currentChannel + 1;
      break;

    case actionType.previousProgram:
      schedule[currentChannel] = programList.find(
        (program) =>
          program.channelId === schedule[currentChannel].channelId &&
          program.endTime.equals(schedule[currentChannel].startTime)
      );
      break;

    case actionType.nextProgram:
      schedule[currentChannel] = programList.find(
        (program) =>
          program.channelId === schedule[currentChannel].channelId &&
          program.startTime.equals(schedule[currentChannel].endTime)
      );
      break;

    case actionType.favouriteAction:
      favouriteAction(programList, schedule[currentChannel].id);
      break;

    case actionType.addRating:
      addRating(programList, schedule[currentChannel].id);
      break;

    case actionType.programDetails:
      prettyPrint(schedule[currentChannel]);
      break;

    case actionType.changePin:
      changePin();
      break;
  }
} while (choice !== actionsList.length);
