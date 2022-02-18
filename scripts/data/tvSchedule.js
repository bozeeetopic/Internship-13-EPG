import { tvChannel } from "./tvChannel";
import { tvProgram } from "./tvProgram";
import { time } from "./time";
import { category } from "../enums/category";

let programs = [
  new tvProgram(
    1,
    "Dobro jutro Hrvatska",
    "Dobro jutro",
    new time(0, 0, 0),
    new time(7, 0, 0),
    category.documentary,
    true,
    false,
    8,
    1
  ),
  new tvProgram(
    2,
    "Vijesti",
    "Jutarnje vjesti",
    new time(7, 0, 0),
    new time(8, 0, 0),
    category.documentary,
    true,
    false,
    5,
    1
  ),
  new tvProgram(
    3,
    "Sabor",
    "Spoiler alert niko nije doša prije podne",
    new time(8, 0, 0),
    new time(12, 30, 0),
    category.documentary,
    false,
    true,
    3,
    1
  ),
  new tvProgram(
    4,
    "Vijesti",
    "Vijesti u podne ipo",
    new time(12, 30, 0),
    new time(13, 0, 0),
    category.documentary,
    true,
    false,
    5,
    1
  ),
  new tvProgram(
    5,
    "Vukovar",
    "Live prijenos hodočasnika u vukovar + exkluziv snimke 4 znaka na ćirilici",
    new time(13, 0, 0),
    new time(14, 45, 0),
    category.documentary,
    true,
    false,
    6,
    1
  ),
  new tvProgram(
    6,
    "TV kalendar",
    "Najbolji način za zabavno učenje o povijesti",
    new time(14, 45, 0),
    new time(15, 0, 0),
    category.documentary,
    false,
    true,
    10,
    1
  ),
  new tvProgram(
    7,
    "Vijesti",
    "Popodnevne vijesti",
    new time(15, 0, 0),
    new time(16, 0, 0),
    category.documentary,
    true,
    false,
    4,
    1
  ),
  new tvProgram(
    8,
    "Reklame",
    "Blok reklama",
    new time(16, 0, 0),
    new time(17, 0, 0),
    category.commercial,
    true,
    false,
    0,
    1
  ),
  new tvProgram(
    9,
    "Sabor",
    "Repriza saborske sjednice",
    new time(17, 0, 0),
    new time(21, 30, 0),
    category.documentary,
    true,
    false,
    2,
    1
  ),
  new tvProgram(
    10,
    "Večernje vijesti",
    "Za sve što se dogodilo kroz dan",
    new time(21, 30, 0),
    new time(22, 30, 0),
    category.documentary,
    false,
    false,
    6,
    1
  ),
  new tvProgram(
    11,
    "Kraj programa za dan",
    "Toilet break za staff",
    new time(22, 30, 0),
    new time(24, 0, 0),
    category.music,
    true,
    true,
    8,
    1
  ),

  new tvProgram(
    12,
    "Who killed captain Alex",
    "Best of da best nigeria production film, very good",
    new time(0, 0, 0),
    new time(2, 30, 0),
    category.movie,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    13,
    "Čuvaj se sinjske ruke",
    "Sukob bande",
    new time(2, 30, 0),
    new time(4, 0, 0),
    category.movie,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    14,
    "Mongolsko vratno pjevanje",
    "Upute korak po korak do seksi glasa",
    new time(4, 0, 0),
    new time(5, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    15,
    "Baltazar",
    "OG Hrvatski crtić",
    new time(6, 0, 0),
    new time(7, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    16,
    "Zvonko",
    "Vilenjak mali vozi auto taj",
    new time(7, 0, 0),
    new time(8, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    17,
    "Harambe",
    "Jeli morao umrijeti? Kako se nositi sa boli?",
    new time(9, 0, 0),
    new time(15, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    18,
    "Misteriozni program",
    "Obećajemo da nije rickroll",
    new time(15, 0, 0),
    new time(16, 0, 0),
    category.music,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    19,
    "British Cookoff",
    "Mladi kuhari pokušavaju impresionirati bakice sa pitama (ne burecima)",
    new time(16, 0, 0),
    new time(17, 0, 0),
    category.documentary,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    20,
    "Sharknado",
    "Toliko loš da je dobar",
    new time(17, 0, 0),
    new time(18, 0, 0),
    category.movie,
    false,
    true,
    1,
    2
  ),
  new tvProgram(
    21,
    "Odbojka",
    "Haikyuu za men-of-culture",
    new time(18, 0, 0),
    new time(19, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),
  new tvProgram(
    22,
    "Odbojka",
    "Haikyuu za men-of-culture",
    new time(19, 0, 0),
    new time(20, 0, 0),
    category.kids,
    false,
    true,
    10,
    2
  ),

  new tvProgram(
    3,
    "Bujica Velimira Bujanca",
    "Woke based hrvatski show",
    new time(0, 0, 0),
    new time(23, 59, 59),
    category.documentary,
    false,
    true,
    10,
    6
  ),
];

let channels = [
  new tvChannel(1, "Hrt 1", []),
  new tvChannel(2, "Hrt 2", []),
  new tvChannel(3, "RTL", []),
  new tvChannel(4, "Nova TV", []),
  new tvChannel(5, "RTL Kockica", []),
  new tvChannel(6, "TV Jadran", []),
];
channels.forEach(
  (c) =>
    (c.programs = [
      ...programs.filter((p) => p.channelId === c.id).map((ci) => ci.id),
    ])
);
export { programs, channels };
