class tvProgram {
  constructor(
    id,
    name,
    description,
    startTime,
    endTime,
    cathegory,
    reprise,
    favourite,
    rating,
    channelId
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.cathegory = cathegory;
    this.reprise = reprise;
    this.favourite = favourite;
    this.rating = rating;
    this.channelId = channelId;
  }
}

export { tvProgram };
