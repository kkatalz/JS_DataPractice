import { convertRandomUserMock } from "./users-convert.js";
import { additionalUsers, randomUserMock } from "../data/FE4U-Lab2-mock.js";

//6th task
export function getUserPercentage(searchProperty, value) {
  let users = convertRandomUserMock(randomUserMock, additionalUsers);
  const amountOfUsers = users.length;
  let searchedUsers = [];

  if (searchProperty === "age" && typeof value === "string") {
    const ages = value.match(/\d+/g); //[ '10', '25' ]

    // "10-25" -> ["10", "25"]
    // "10-" -> ["10"]
    // "-25" -> ["25"]
    if (ages.length === 1) {
      //age = "-10"
      if (value[0] === "-") {
        const highLimitAge = parseInt(ages[0]);

        searchedUsers = users.filter(
          (user) => user[searchProperty] < highLimitAge
        );

        //age= 10-
      } else if (value[0] !== "-") {
        const lowLimitAge = parseInt(ages[0]);

        searchedUsers = users.filter(
          (user) => user[searchProperty] > lowLimitAge
        );
      }
    }

    //age = "10-75 "
    else {
      const lowLimitAge = parseInt(ages[0]);
      const highLimitAge = parseInt(ages[1]);
      searchedUsers = users.filter(
        (user) =>
          user[searchProperty] > lowLimitAge &&
          user[searchProperty] < highLimitAge
      );
    }

    //when "age" is number
  } else {
    searchedUsers = users.filter((user) =>
      typeof value === "string"
        ? user[searchProperty].includes(value)
        : user[searchProperty] === value
    );
  }
  const percentage = (searchedUsers.length * 100) / amountOfUsers;

  return `${percentage.toFixed(2)} %`;
}
