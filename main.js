import { additionalUsers, randomUserMock } from "./FE4U-Lab2-mock.js";

const courses = [
  "Mathematics",
  "Physics",
  "English",
  "Computer Science",
  "Dancing",
  "Chess",
  "Biology",
  "Chemistry",
  "Law",
  "Art",
  "Medicine",
  "Statistics",
];

// Lab2 code

function getRandomCourse() {
  const randomIndex = Math.floor(Math.random() * courses.length);

  return courses[randomIndex];
}

function getYearsFromDate(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

//functions for second task
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

function checkPhoneNumber(phone, country) {}

// 1 task

function convertRandomUserMock(usersFirst, usersSecond) {
  const mappedRandomUsers = usersFirst.map((user) => {
    return {
      gender: user.gender,
      title: user.name.title,
      full_name: `${user.name.first} ${user.name.last}`,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
      coordinates: user.location.coordinates,
      timezone: user.location.timezone,
      email: user.email,
      b_date: user.dob.date,
      age: user.dob.age,
      phone: user.phone,
      picture_large: user.picture.large,
      picture_thumbnail: user.picture.thumbnail,
      id: user.id.value,
      favorite: null,
      course: getRandomCourse(),
      bg_color: null,
      note: null,
    };
  });

  const mappedAdditionalUsers = usersSecond.map((user) => {
    return {
      gender: user.gender,
      title: user.name && user.name.title ? user.name.title : null, // first step: check if name exists in user, second step: check if title exists in name
      full_name: user.full_name,
      city: user.city || null,
      state: user.state || null,
      country: user.country || null,
      postcode: user.postcode || null,
      coordinates: user.coordinates || null,
      timezone: user.timezone || null,
      email: user.email || null,
      b_date: user.b_date || null,
      age: getYearsFromDate(user.b_day) || null,
      phone: user.phone || null,
      picture_large: user.picture_large || null,
      picture_thumbnail: user.picture_thumbnail || null,
      id: user.id,
      favorite: user.favorite,
      course: user.course,
      bg_color: user.bg_color,
      note: user.note,
    };
  });

  const mappedUsers = mappedRandomUsers.concat(mappedAdditionalUsers);
  // const mappedUsers = [...mappedRandomUsers,...mappedAdditionalUsers]

  const mappedUsersWithoutDuplicates = Array.from(new Set(mappedUsers));

  return mappedUsersWithoutDuplicates;
}

// 2 task

function getValidUsers(users) {
  const filteredUsers = users.filter(
    (user) =>
      checkUppercase(user.full_name) &&
      checkLowercase(user.gender) &&
      checkUppercase(user.note) &&
      checkUppercase(user.state) &&
      checkUppercase(user.city) &&
      checkUppercase(user.country) &&
      checkAge(user.age) &&
      //   checkPhoneNumber(user.phone, user.country) &&
      user.email.includes("@")
  );

  return filteredUsers;
}

// const array = [1,2,3,4,5];
// const filteredArray = array.filter(value=>value!==3)
// filteredArray -> [1,2,4,5]

console.log(
  getValidUsers(convertRandomUserMock(randomUserMock, additionalUsers))
);
