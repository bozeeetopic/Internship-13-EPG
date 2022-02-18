import { schedule } from "./data/tvSchedule";
alert("usli u main");
nj();

let pin = localStorage.getItem("pin");
pin = pin ? pin : "showbobs";
localStorage.setItem("pin", pin);
