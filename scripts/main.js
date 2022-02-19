import { Time } from "./data/time.js";
import { programs, channels } from "./data/tvSchedule.js";
import { category } from "./enums/category.js";

let pin = localStorage.getItem("pin");
pin = pin ? pin : "1111";
localStorage.setItem("pin", pin);

do {
  let newDate = new Date();
  let timeNow = new Time(
    newDate.getHours(),
    newDate.getMinutes(),
    newDate.getSeconds()
  );
  console.log(timeNow.prettyPrint());
  console.table(
    programs.filter(
      (p) =>
        p.startTime.isEarlierThan(timeNow) && timeNow.isEarlierThan(p.endTime)
    )
  );
} while (confirm());
