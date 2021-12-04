import User, { getName, getAge, log } from "./script.js";
const jeevan = new User("jeevan", 30);

log(getName(jeevan)); // jeevan
log(getAge(jeevan)); // 29
