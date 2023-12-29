// Modules

// It only works when you open your project using server

import f1 from "./module.js";
//as is not necessary for default function

import User from "./user.js";

import { Fun2 as f2, Fun3 as f3, Fun4 as f4 } from "./module.js";

const obj = new User("Kim@gmail.com", "Kim Jung");
console.log(obj);
console.log(obj.greeting());
console.log(f1());
console.log(f2());
console.log(f3());
console.log(f4());

// Another way to Import

/*
import * as M from "./module.js";
console.log(M.default()); // Default function is named as default
console.log(M.Fun2());
console.log(M.Fun3());
console.log(M.Fun4());
*/
