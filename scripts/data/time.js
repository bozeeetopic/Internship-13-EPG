class time {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  toString() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}

export { time };
