function programsListToString(schedule, channels, highlightedChannelId) {
  let stringToReturn = "  Kanal = Ime programa   trajanje\n";
  for (let i = 0; i < schedule.length; i++) {
    let currentChannel = channels.find(
      (channel) => channel.id === schedule[currentChannel].channelId
    ).name;

    stringToReturn += i === highlightedChannelId ? "Trenutno -> " : "";
    stringToReturn += currentChannel.name;
    stringToReturn += schedule[i].shortPrint() + "\n";
  }
  stringToReturn += "\n";
  return stringToReturn;
}

export { programsListToString };
