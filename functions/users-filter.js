import { convertRandomUserMock } from "./users-convert.js";
import { additionalUsers, randomUserMock } from "../data/FE4U-Lab2-mock.js";

//function for 3rd task

// getFilteredUsers("Germany", "10-25", "male", true)

export function getFilteredUsers(country, age, gender, favorite) {
  let users = convertRandomUserMock(randomUserMock, additionalUsers);

  //country check

  // function isCountryInUser(user){
  //   if(user.country === country ) return true;
  //   return false
  // }or

  if (country) users = users.filter((user) => user.country === country);

  // (user) => user.country === country
  // JavaScript

  //age check
  if (age) {
    if (typeof age === "string") {
      const ages = age.match(/\d+/g); //[ '10', '25' ]
      const lowLimitAge = parseInt(ages[0]);
      const highLimitAge = parseInt(ages[1]);
      users = users.filter(
        (user) => user.age >= lowLimitAge && user.age <= highLimitAge
      );
    } else {
      users = users.filter((user) => user.age === age);
    }
  }

  //gender check
  if (gender && (gender === "female" || gender === "male"))
    users = users.filter((user) => user.gender === gender);

  //favorite check
  if (favorite !== null)
    users = users.filter((user) => user.favorite === favorite);

  return users;
}
