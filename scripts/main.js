import { time } from "./data/time.js";
import { programs, channels } from "./data/tvSchedule.js";
import { category } from "./enums/category.js";
import { isFirstTimeSmaller } from "./helpers/timeComparer.js";

let pin = localStorage.getItem("pin");
pin = pin ? pin : "1111";
localStorage.setItem("pin", pin);

do {
  let newDate = new Date();
  let timeNow = new time(
    newDate.getHours,
    newDate.getMinutes,
    newDate.getSeconds
  );
  console.table(
    programs.filter(
      (p) =>
        isFirstTimeSmaller(p.startTime, timeNow) &&
        isFirstTimeSmaller(timeNow, p.endTime)
    )
  );
} while (confirm());
