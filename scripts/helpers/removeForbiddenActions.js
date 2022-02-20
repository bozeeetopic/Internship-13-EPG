import { Time } from "../data/time.js";
import { actionType } from "../enums/actionType.js";

function removeForbiddenActions(actions, program) {
  let newActions = [...actions];

  if (program.startTime.equals(new Time(0, 0, 0))) {
    newActions = newActions.filter(
      (action) => action.funcion !== actionType.previousProgram
    );
  }

  if (program.endTime.equals(new Time(24, 0, 0))) {
    newActions = newActions.filter(
      (action) => action.funcion !== actionType.nextProgram
    );
  }

  return newActions;
}
export { removeForbiddenActions };
