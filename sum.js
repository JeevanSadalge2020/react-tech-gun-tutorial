export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  return user.name;
}

export function printAge(user) {
  return user.age;
}
