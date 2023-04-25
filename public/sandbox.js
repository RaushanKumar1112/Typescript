"use strict";
// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => {
//   console.log(input);
// });
// //types
// let character = "mario";
// let age = 30;
// let isblackBelt = false;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(6));
// //  arrays
// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// names[4] = "fun";
// let mixed = ["naruto", 500, "aot", 78, true];
// mixed.push("demon");
// mixed.push(24);
// console.log(mixed);
// // objects
// let obj = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// };
// obj.age = 35;
// obj.name = "luigi";
// obj = {
//   name: 'yoshi',
//   belt: 'blue',
//   age: 34,
//  }
// console.log(obj);
// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// let ninjas: string[] = [];
// ninjas.push("shuan");
// let mixed: (string | number)[] = []; //this means we have an array which can take both string and number as input
// let uid: string | number;
// let ninjaOne: object;
// ninjaOne = { name: "yohsi", age: 30 };
// let greet = () => {
//   console.log("Hello!");
// };
//let add: Function;
// for making a parameter default either place a ? sign between name  and : or give a default value to it
// let add = (a: number, b: number, c: number | string = 20) => {
//   console.log(c);
//   console.log(a + b);
// };
// greet();
// add(4, 5);
// type StringOrNum = string | number;
// const logUsers = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: { name: string; uid: StringOrNum }) => {
//   console.log(`Welcome ${user.name}`);
// };
// const obj = {
//   name: "Raushan",
//   uid: "12fdnsndf2342",
// };
// logUsers(obj.uid, obj.name);
// greet(obj);
