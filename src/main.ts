import ms from "ms";
import millisecondsUntil from "./millisecondsUntil.js";
import lunchtime from "./lunchtime.js";

function howLongUntilLunch(hours: number = 12, minutes: number = 30): string {
  const millisecondsUntilLunchTime = millisecondsUntil(
    lunchtime(hours, minutes)
  );
  return ms(millisecondsUntilLunchTime, { long: true });
}

function testFun(x: string) {}

export default { howLongUntilLunch, testFun };
