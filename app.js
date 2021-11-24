import User, { printName, printAge } from "./sum.js";

const jeevan = new User("jeevan", 29);

console.log(printName(jeevan));
console.log(printAge(jeevan));
