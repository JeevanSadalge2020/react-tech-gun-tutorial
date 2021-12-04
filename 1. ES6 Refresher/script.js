//this wont need a variable import syntax
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//This will be exported as a variable and hence need to be imported as a variable
export function getName(user) {
  return user.name;
}
//This will be exported as a variable and hence need to be imported as a variable
export function getAge(user) {
  return user.age;
}
export function log(input) {
  return console.log(input);
}
