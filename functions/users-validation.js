// 2 task

//main function for second task
export function getValidUsers(users) {
  const filteredUsers = users.filter(
    (user) =>
      checkUppercase(user.full_name) &&
      checkLowercase(user.gender) &&
      // checkUppercase(user.note) &&
      checkUppercase(user.state) &&
      checkUppercase(user.city) &&
      checkUppercase(user.country) &&
      checkAge(user.age) &&
      checkPhoneNumber(user.phone) &&
      user.email.includes("@")
  );

  return filteredUsers;
}

//additional functions for second task
function checkUppercase(string) {
  if (typeof string === "string" && string[0]) {
    const isFirstLetterUppercase = string[0] !== string[0].toLowerCase();
    return isFirstLetterUppercase;
  }
}

function checkLowercase(string) {
  if (typeof string === "string" && string[0]) {
    const isFirstLetterUppercase = string[0] !== string[0].toUpperCase();
    return isFirstLetterUppercase;
  }
}

function checkAge(age) {
  if (typeof age === "number") return true;
  else {
    return false;
  }
}

function checkPhoneNumber(phone) {
  if (typeof phone === "string" && (phone.includes("-") || phone.length === 10))
    return true;
  else {
    return false;
  }
}
