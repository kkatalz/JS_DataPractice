import { convertRandomUserMock } from "./users-convert.js";
import { additionalUsers, randomUserMock } from "../data/FE4U-Lab2-mock.js";

//4th task
export function getSortedUsers(sortProperty, sortOrder) {
  //full_name, age, b_day, country

  if (
    sortProperty === "full_name" ||
    sortProperty === "age" ||
    sortProperty === "b_day" ||
    sortProperty === "country"
  ) {
    let users = convertRandomUserMock(randomUserMock, additionalUsers);

    // full_name: "John Doe", age: 30, b_day: "1993-05-15", country: "USA"
    // full_name: "Jane Doe", age: 25, b_day: "1998-10-20", country: "Canada"

    function compareFunction(a, b) {
      if (b[sortProperty] < a[sortProperty]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      if (a[sortProperty] < b[sortProperty]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      return 0;
    }

    return users.sort(compareFunction);
  }
}
