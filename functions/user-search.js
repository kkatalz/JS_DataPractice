import { additionalUsers, randomUserMock } from "../data/FE4U-Lab2-mock.js";
import { convertRandomUserMock } from "./users-convert.js";

//5th task
export function getUserByParameter(searchProperty, value) {
  //name, note, age.
  if (
    searchProperty === "full_name" ||
    searchProperty === "age" ||
    searchProperty === "note"
  ) {
    return getUserByAnyParameter(searchProperty, value);
  }
}

function getUserByAnyParameter(searchProperty, value) {
  let users = convertRandomUserMock(randomUserMock, additionalUsers);

  if (searchProperty === "age" && typeof value === "string") {
    const ages = value.match(/\d+/g); //[ '10', '25' ]
    if (ages.length === 1) {
      return users.find((user) => user[searchProperty] === parseInt(value));
    }
    const lowLimitAge = parseInt(ages[0]);
    const highLimitAge = parseInt(ages[1]);
    return users.find(
      (user) =>
        user[searchProperty] > lowLimitAge &&
        user[searchProperty] < highLimitAge
    );
  }

  const searchedUser = users.find((user) =>
    typeof value === "string"
      ? user[searchProperty].includes(value)
      : user[searchProperty] === value
  );

  return searchedUser;
}
