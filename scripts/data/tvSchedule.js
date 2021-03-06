import { TvChannel } from "./tvChannel.js";
import { TvProgram } from "./tvProgram.js";
import { Time } from "./time.js";
import { category } from "../enums/category.js";

let programs = [
  new TvProgram(
    1,
    "Dobro jutro Hrvatska",
    "Dobro jutro",
    new Time(0, 0, 0),
    new Time(7, 0, 0),
    category.documentary,
    true,
    false,
    8,
    1
  ),
  new TvProgram(
    2,
    "Vijesti",
    "Jutarnje vjesti",
    new Time(7, 0, 0),
    new Time(8, 0, 0),
    category.documentary,
    true,
    false,
    5,
    1
  ),
  new TvProgram(
    3,
    "Sabor",
    "Spoiler alert niko nije doša prije podne",
    new Time(8, 0, 0),
    new Time(12, 30, 0),
    category.documentary,
    false,
    true,
    3,
    1
  ),
  new TvProgram(
    4,
    "Vijesti",
    "Vijesti u podne ipo",
    new Time(12, 30, 0),
    new Time(13, 0, 0),
    category.documentary,
    true,
    false,
    5,
    1
  ),
  new TvProgram(
    5,
    "Vukovar",
    "Live prijenos hodočasnika u vukovar + exkluziv snimke 4 znaka na ćirilici",
    new Time(13, 0, 0),
    new Time(14, 45, 0),
    category.documentary,
    true,
    false,
    6,
    1
  ),
  new TvProgram(
    6,
    "TV kalendar",
    "Najbolji način za zabavno učenje o povijesti",
    new Time(14, 45, 0),
    new Time(15, 0, 0),
    category.documentary,
    false,
    true,
    10,
    1
  ),
  new TvProgram(
    7,
    "Vijesti",
    "Popodnevne vijesti",
    new Time(15, 0, 0),
    new Time(16, 0, 0),
    category.documentary,
    true,
    false,
    4,
    1
  ),
  new TvProgram(
    8,
    "Reklame",
    "Blok reklama",
    new Time(16, 0, 0),
    new Time(17, 0, 0),
    category.commercial,
    true,
    false,
    0,
    1
  ),
  new TvProgram(
    9,
    "Sabor",
    "Repriza saborske sjednice",
    new Time(17, 0, 0),
    new Time(21, 30, 0),
    category.documentary,
    true,
    false,
    2,
    1
  ),
  new TvProgram(
    10,
    "Večernje vijesti",
    "Za sve što se dogodilo kroz dan",
    new Time(21, 30, 0),
    new Time(22, 30, 0),
    category.documentary,
    false,
    false,
    6,
    1
  ),
  new TvProgram(
    11,
    "Kraj programa za dan",
    "Toilet break za staff",
    new Time(22, 30, 0),
    new Time(24, 0, 0),
    category.music,
    true,
    true,
    8,
    1
  ),

  new TvProgram(
    12,
    "Who killed captain Alex",
    "Best of da best uganda production film, very good",
    new Time(0, 0, 0),
    new Time(2, 30, 0),
    category.movie,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    13,
    "Čuvaj se sinjske ruke",
    "Sukob bande",
    new Time(2, 30, 0),
    new Time(4, 0, 0),
    category.movie,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    14,
    "Mongolsko vratno pjevanje",
    "Upute korak po korak do seksi glasa",
    new Time(4, 0, 0),
    new Time(5, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    15,
    "Baltazar",
    "OG Hrvatski crtić",
    new Time(6, 0, 0),
    new Time(7, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    16,
    "Zvonko",
    "Vilenjak mali vozi auto taj",
    new Time(7, 0, 0),
    new Time(8, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    17,
    "Harambe",
    "Jeli morao umrijeti? Kako se nositi sa boli?",
    new Time(9, 0, 0),
    new Time(15, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    18,
    "Misteriozni program",
    "Obećajemo da nije rickroll",
    new Time(15, 0, 0),
    new Time(16, 0, 0),
    category.music,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    19,
    "British Cookoff",
    "Mladi kuhari pokušavaju impresionirati bakice sa pitama (ne burecima)",
    new Time(16, 0, 0),
    new Time(17, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    20,
    "Sharknado",
    "Toliko loš da je dobar",
    new Time(17, 0, 0),
    new Time(18, 0, 0),
    category.movie,
    false,
    true,
    1,
    2
  ),
  new TvProgram(
    21,
    "Odbojka",
    "Haikyuu za ljude od kulture",
    new Time(18, 0, 0),
    new Time(19, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    22,
    "Men of Steel",
    "Kovanje katane",
    new Time(19, 0, 0),
    new Time(20, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new TvProgram(
    23,
    "Ero show",
    "Hot milfs in your area",
    new Time(20, 0, 0),
    new Time(24, 0, 0),
    category.ero,
    false,
    true,
    10,
    2
  ),

  new TvProgram(
    24,
    "Tarot show",
    "Ovaj put čita iz kore od banane",
    new Time(0, 0, 0),
    new Time(4, 0, 0),
    category.commercial,
    false,
    false,
    3,
    3
  ),
  new TvProgram(
    25,
    "Shaolin football",
    "They kick balls and kick balls",
    new Time(4, 0, 0),
    new Time(6, 0, 0),
    category.movie,
    false,
    false,
    10,
    3
  ),
  new TvProgram(
    26,
    "Pokemoni",
    "Ash u 24. sezoni još uvik napada ground pokemone električnim napadima",
    new Time(6, 0, 0),
    new Time(6, 20, 0),
    category.kids,
    false,
    false,
    10,
    3
  ),
  new TvProgram(
    27,
    "Yu-Gi-Oh",
    "Srce u kartama",
    new Time(6, 20, 0),
    new Time(6, 40, 0),
    category.kids,
    false,
    false,
    10,
    3
  ),
  new TvProgram(
    28,
    "Dragonball",
    "Sponsored by vegeta",
    new Time(6, 40, 0),
    new Time(7, 0, 0),
    category.kids,
    false,
    false,
    10,
    3
  ),
  new TvProgram(
    29,
    "Tengen Toppa Gurren Lagann",
    "Sponsored by Bauhaus bušilice",
    new Time(7, 0, 0),
    new Time(7, 20, 0),
    category.kids,
    false,
    false,
    10,
    3
  ),
  new TvProgram(
    30,
    "Digimoni",
    "Idk ja sam pokemon osoba",
    new Time(7, 20, 0),
    new Time(7, 40, 0),
    category.kids,
    false,
    false,
    9,
    3
  ),
  new TvProgram(
    31,
    "Beyblade",
    "Sponsored by Dead or Alive",
    new Time(7, 40, 0),
    new Time(8, 0, 0),
    category.kids,
    false,
    false,
    9,
    3
  ),
  new TvProgram(
    32,
    "Serije",
    "Španjolske, turske pa naše",
    new Time(8, 0, 0),
    new Time(17, 0, 0),
    category.soapOpera,
    false,
    false,
    3,
    3
  ),
  new TvProgram(
    33,
    "Serije",
    "Španjolske, turske pa naše",
    new Time(17, 0, 0),
    new Time(24, 0, 0),
    category.soapOpera,
    true,
    false,
    3,
    3
  ),

  new TvProgram(
    34,
    "Pornjava",
    "Ima svašta",
    new Time(0, 0, 0),
    new Time(5, 0, 0),
    category.ero,
    false,
    false,
    10,
    4
  ),
  new TvProgram(
    35,
    "Crtani",
    "Ima svašta",
    new Time(5, 0, 0),
    new Time(8, 0, 0),
    category.kids,
    false,
    false,
    10,
    4
  ),
  new TvProgram(
    36,
    "Dokumentarci",
    "Ima svašta",
    new Time(8, 0, 0),
    new Time(12, 0, 0),
    category.documentary,
    false,
    false,
    10,
    4
  ),
  new TvProgram(
    37,
    "Muzika",
    "Ima svašta",
    new Time(12, 0, 0),
    new Time(15, 0, 0),
    category.music,
    false,
    false,
    10,
    4
  ),
  new TvProgram(
    38,
    "Kako je grinč ukrao božić",
    "Kako indeed",
    new Time(15, 0, 0),
    new Time(17, 0, 0),
    category.movie,
    false,
    false,
    10,
    4
  ),
  new TvProgram(
    39,
    "Reklame",
    "Ima svašta",
    new Time(17, 0, 0),
    new Time(18, 0, 0),
    category.commercial,
    false,
    false,
    1,
    4
  ),
  new TvProgram(
    40,
    "Serije",
    "Ima svašta",
    new Time(18, 0, 0),
    new Time(19, 0, 0),
    category.soapOpera,
    false,
    false,
    6,
    4
  ),
  new TvProgram(
    41,
    "Dnevnik Nove TV",
    "Ima svašta",
    new Time(19, 0, 0),
    new Time(20, 0, 0),
    category.documentary,
    false,
    false,
    4,
    4
  ),
  new TvProgram(
    42,
    "Provjereno",
    "Dnevnik part 2",
    new Time(20, 0, 0),
    new Time(21, 0, 0),
    category.documentary,
    false,
    false,
    10,
    4
  ),
  new TvProgram(
    43,
    "Pornjava",
    "Ima svašta",
    new Time(21, 0, 0),
    new Time(24, 0, 0),
    category.ero,
    true,
    false,
    10,
    4
  ),

  new TvProgram(
    44,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(0, 0, 0),
    new Time(4, 0, 0),
    category.documentary,
    false,
    true,
    10,
    5
  ),
  new TvProgram(
    45,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(4, 0, 0),
    new Time(6, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    46,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(6, 0, 0),
    new Time(8, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    47,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(8, 0, 0),
    new Time(10, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    48,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(10, 0, 0),
    new Time(12, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    49,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(12, 0, 0),
    new Time(14, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    50,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(14, 0, 0),
    new Time(16, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    51,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(16, 0, 0),
    new Time(18, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    52,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(18, 0, 0),
    new Time(20, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
  new TvProgram(
    53,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new Time(20, 0, 0),
    new Time(24, 0, 0),
    category.documentary,
    true,
    true,
    10,
    5
  ),
];

let channels = [
  new TvChannel(1, "Hrt 1", []),
  new TvChannel(2, "Hrt 2", []),
  new TvChannel(3, "RTL", []),
  new TvChannel(4, "Nova TV", []),
  new TvChannel(5, "TV Jadran", []),
];
channels.forEach(
  (channel) =>
    (channel.programs = [
      ...programs
        .filter((program) => program.channelId === channel.id)
        .map((channelFullObj) => channelFullObj.id),
    ])
);
export { programs, channels };
