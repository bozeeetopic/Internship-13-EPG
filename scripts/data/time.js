import { addZeroToSingleDigit } from "../helpers/addZeroToSingleDigit.js";

class Time {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  prettyPrint() {
    return this.seconds
      ? `${addZeroToSingleDigit(this.hours)}:${addZeroToSingleDigit(
          this.minutes
        )} ${addZeroToSingleDigit(this.seconds)}s`
      : `${addZeroToSingleDigit(this.hours)}:${addZeroToSingleDigit(
          this.minutes
        )}`;
  }

  isEarlierThan(time2) {
    return this.hours < time2.hours
      ? false
      : this.hours > time2.hours
      ? true
      : this.minutes < time2.minutes
      ? false
      : this.minutes > time2.minutes
      ? true
      : this.seconds < time2.seconds
      ? false
      : true;
  }

  equals(time2) {
    return this.hours < time2.hours
      ? false
      : this.hours > time2.hours
      ? false
      : this.minutes < time2.minutes
      ? false
      : this.minutes > time2.minutes
      ? false
      : this.seconds < time2.seconds
      ? false
      : this.seconds > time2.seconds
      ? false
      : true;
  }
}

export { Time };
