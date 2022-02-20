import { Time } from "../data/time.js";
function currentDateToTime() {
  let newDate = new Date();
  let timeNow = new Time(
    newDate.getHours(),
    newDate.getMinutes(),
    newDate.getSeconds()
  );
  return timeNow;
}
export { currentDateToTime };
