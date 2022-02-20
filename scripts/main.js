import { programs, channels } from "./data/tvSchedule.js";
import { actionType } from "./enums/actionType.js";
import { addRating } from "./actions/addRating.js";
import { changePin } from "./actions/changePin.js";
import { favouritesAction } from "./actions/favouritesAction.js";
import { actionsList } from "./actions/actionsList.js";
import { programDetails } from "./actions/programDetails.js";
import { chooseNumberBetween } from "./helpers/numberInput.js";
import { programsListToString } from "./helpers/programsListToString.js";
import { currentDateToTime } from "./helpers/currentDateToTime.js";
import { Time } from "./data/time.js";

let timeNow = currentDateToTime();

let programList = localStorage.getItem("programs");
programList = programList ? JSON.parse(programList) : [...programs];

let schedule = programList.filter(
  (program) =>
    program.endTime.isEarlierThan(timeNow) &&
    timeNow.isEarlierThan(program.startTime)
);
let currentChannel = 0;
let choice;

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
  if (!choice) {
    choice = 10;
  }

  switch (actionsList[choice - 1].function) {
    case actionType.channelUp:
      currentChannel =
        currentChannel == 0 ? channels.length - 1 : currentChannel - 1;
      timeNow = currentDateToTime();
      schedule = programList.filter(
        (program) =>
          program.endTime.isEarlierThan(timeNow) &&
          timeNow.isEarlierThan(program.startTime)
      );
      break;

    case actionType.channelDown:
      currentChannel =
        currentChannel === channels.length - 1 ? 0 : currentChannel + 1;
      timeNow = currentDateToTime();
      schedule = programList.filter(
        (program) =>
          program.endTime.isEarlierThan(timeNow) &&
          timeNow.isEarlierThan(program.startTime)
      );
      break;

    case actionType.previousProgram:
      schedule[currentChannel] = schedule[currentChannel].startTime.equals(
        new Time(0, 0, 0)
      )
        ? programList.find(
            (program) =>
              program.channelId === schedule[currentChannel].channelId &&
              program.endTime.equals(new Time(24, 0, 0))
          )
        : programList.find(
            (program) =>
              program.channelId === schedule[currentChannel].channelId &&
              program.endTime.equals(schedule[currentChannel].startTime)
          );
      break;

    case actionType.nextProgram:
      schedule[currentChannel] = schedule[currentChannel].endTime.equals(
        new Time(24, 0, 0)
      )
        ? programList.find(
            (program) =>
              program.channelId === schedule[currentChannel].channelId &&
              program.startTime.equals(new Time(0, 0, 0))
          )
        : programList.find(
            (program) =>
              program.channelId === schedule[currentChannel].channelId &&
              program.startTime.equals(schedule[currentChannel].endTime)
          );
      break;

    case actionType.favouriteAction:
      favouritesAction(programList, schedule[currentChannel].id);
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
      let favouritePrograms = [
        ...programList.filter(
          (program) =>
            program.favourite === true && program.endTime.isEarlierThan(timeNow)
        ),
      ];
      alert(programsListToString(favouritePrograms, channels, -1));
      break;

    case actionType.changePin:
      changePin();
      break;
  }
} while (choice !== actionsList.length);
