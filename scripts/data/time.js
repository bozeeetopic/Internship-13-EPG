class Time {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  prettyPrint() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  isEarlierThan(time2) {
    return this.hours < time2.hours
      ? true
      : this.hours > time2.hours
      ? false
      : this.minutes < time2.minutes
      ? true
      : this.minutes > time2.minutes
      ? false
      : this.seconds < time2.seconds
      ? true
      : false;
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
