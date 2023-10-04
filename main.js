import { additionalUsers, randomUserMock } from "./data/FE4U-Lab2-mock.js";

import { convertRandomUserMock } from "./functions/users-convert.js";
import { getUserByParameter } from "./functions/user-search.js";
import { getUserPercentage } from "./functions/users-percentage.js";
import { getFilteredUsers } from "./functions/users-filter.js";
import { getSortedUsers } from "./functions/users-sorted.js";
import { getValidUsers } from "./functions/users-validation.js";

console.log("\n");

//    1st task
//console.log(convertRandomUserMock(randomUserMock, additionalUsers));

//    2nd task
// console.log(
//   getValidUsers(convertRandomUserMock(randomUserMock, additionalUsers))
// );

//    3rd task logical AND
// console.log(getFilteredUsers("Germany", 65, "male", true));

// //    4th logical OR
// console.log(getSortedUsers("age", "asc"));

// //    5th task
console.log(getUserByParameter("age", 65)); //Norbert Weishaupt

// //6th task
// console.log(getUserPercentage("age", "65"));

console.log("\n");
