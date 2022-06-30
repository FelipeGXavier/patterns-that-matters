// const makeVehicle = (name: string, type: string) => ({
//   name,
//   type,
// });
// const makeCar = (name: string) => makeVehicle(name, "car");
// const makeTruck = (name: string) => makeVehicle(name, "truck");

export const makeVehicle = (type: string) => (name: string) => ({ name, type });
