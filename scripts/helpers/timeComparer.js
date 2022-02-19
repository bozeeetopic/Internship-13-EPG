function isFirstTimeSmaller(time1, time2) {
  return time1.hours < time2.hours
    ? true
    : time1.hours > time2.hours
    ? false
    : time1.minutes < time2.minutes
    ? true
    : time1.minutes > time2.minutes
    ? false
    : time1.seconds < time2.seconds
    ? true
    : time1.seconds > time2.seconds
    ? false
    : true;
}

export { isFirstTimeSmaller };
