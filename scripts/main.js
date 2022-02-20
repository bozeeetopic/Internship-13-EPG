import { programs, channels } from "./data/tvSchedule.js";
import { actionType } from "./enums/actionType.js";
import { actionsList } from "./actions/actionsList.js";
import { chooseNumberBetween } from "./helpers/numberInput.js";
import { programsListToString } from "./helpers/programsListToString.js";
import { currentDateToTime } from "./helpers/currentDateToTime.js";
import { changePin } from "./actions/changePin.js";

let timeNow = currentDateToTime();

let programList = localStorage.getItem("programs");
programList = programList ? JSON.parse(programList) : [...programs];

let schedule = programList.filter(
  (program) =>
    program.startTime.isEarlierThan(timeNow) &&
    timeNow.isEarlierThan(program.endTime)
);
let currentChannel = 0;

do {
  let scheduleString = programsListToString(schedule, channels, currentChannel);
  let actionString = "Unesi broj uz akciju za njeno izvođenje:\n";
  for (let i = 0; i < actionsList.length; i++) {
    actionString += `${i + 1}. - ${actionsList[i].name}\n`;
  }

  choice = chooseNumberBetween(
    scheduleString + actionString,
    1,
    actionsList.length
  );

  switch (actionsList[choice - 1].function) {
    case actionType.channelUp:
      currentChannel = currentChannel ? 4 : currentChannel - 1;
      timeNow = currentDateToTime();
      schedule = programList.filter(
        (program) =>
          program.startTime.isEarlierThan(timeNow) &&
          timeNow.isEarlierThan(program.endTime)
      );
      break;

    case actionType.channelDown:
      currentChannel = currentChannel === 4 ? 0 : currentChannel + 1;
      timeNow = currentDateToTime();
      schedule = programList.filter(
        (program) =>
          program.startTime.isEarlierThan(timeNow) &&
          timeNow.isEarlierThan(program.endTime)
      );
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
      programDetails(
        schedule[currentChannel],
        channels.find(
          (channel) => channel.id === schedule[currentChannel].channelId
        )
      );
      break;

    case actionType.favourites:
      let favouritePrograms = programList.filter(
        (program) =>
          program.favourite === true && program.endTime.isEarlierThan(timeNow)
      );
      alert(programsListToString(favouritePrograms, channels, -1));
      break;

    case actionType.changePin:
      changePin();
      break;
  }
} while (choice !== actionsList.length);
