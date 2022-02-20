import { category } from "../enums/category.js";
class TvProgram {
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
    this.category = cathegory;
    this.reprise = reprise;
    this.favourite = favourite;
    this.rating = rating;
    this.channelId = channelId;
  }
  prettyPrint(channelName) {
    let stringToReturn = `Ime: ${this.name}\n
    Opis: ${this.description}\n
    Ime kanala: ${channelName}\n
    Raspored: ${this.startTime} - ${this.endTime}\n
    Žanr: ${category[this.category]}\n
    Ocjena: ${this.rating}\n`;

    stringToReturn += this.reprise ? "Repriza\n" : "";
    stringToReturn += this.favourite ? "Favorit\n" : "";

    return stringToReturn;
  }
  shortPrint() {
    return `${this.name}      ${this.startTime} - ${this.endTime}`;
  }
}

export { TvProgram };
