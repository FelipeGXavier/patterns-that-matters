import { makeVehicle } from "./curryingFactory";
import { FormatType } from "./formatEnum";
import { FormatFactory } from "./formatFactory";
import { TimeSpan } from "./timeSpan";

// Currying factory
const makeCar = makeVehicle("car");
const makeTruck = makeVehicle("truck");
console.log(makeCar("Logan"), makeTruck("Scania"));

// Static factory
const format = FormatFactory.getInstance(FormatType.NUMBER);
console.log(format);

// Static factory method
// const timeSpan = new TimeSpan(1,2,3);
const timeSpanMinutes = TimeSpan.fromMinutes(5);
const timeSpanHours = TimeSpan.fromHours(1);
console.log(timeSpanHours);
