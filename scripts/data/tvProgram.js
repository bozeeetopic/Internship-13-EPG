class tvProgram {
  constructor(
    id,
    name,
    description,
    startTime,
    endTime,
    cathegory,
    reprise,
    channelId,
    favourite,
    adult,
    rating
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.cathegory = cathegory;
    this.reprise = reprise;
    this.channelId = channelId;
    this.favourite = favourite;
    this.adult = adult;
    this.rating = rating;
  }
}

export default tvProgram;
