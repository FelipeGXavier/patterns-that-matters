import { Person } from "./person";

const person: Person = new Person("John")
  .withAddress("Rua XYZ")
  .withBirth(new Date())
  .withAdminType(true)
  .withEmail("john@doe.com");

console.log(person);
