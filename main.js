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
      checkPhoneNumber(user.phone) &&
      user.email.includes("@")
  );

  return filteredUsers;
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

function checkPhoneNumber(phone) {
  if (typeof phone === "string" && (phone.includes("-") || phone.length === 10))
    return true;
  else {
    return false;
  }
}

//function for 3rd task

// getFilteredUsers("Germany", "10-25", "male", true)

function getFilteredUsers(country, age, gender, favorite) {
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
  if (age && typeof age === "string") {
    const ages = age.match(/\d+/g); //[ '10', '25' ]
    const lowLimitAge = parseInt(ages[0]);
    const highLimitAge = parseInt(ages[1]);
    users = users.filter(
      (user) => user.age >= lowLimitAge && user.age <= highLimitAge
    );

    //gender check
    if (gender && (gender === "female" || gender === "male"))
      users = users.filter((user) => user.gender === gender);

    //favorite check
    if (favorite !== null) users.filter((user) => user.favorite === favorite);

    return users;
  }
}

//fourth task
function getSortedUsers(sortProperty, sortOrder) {
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

//second task
// console.log(
//   getValidUsers(convertRandomUserMock(randomUserMock, additionalUsers))
// );

//third task
//console.log(getFilteredUsers("Ireland", "10-65", "male", null));

//  4th
console.log(getSortedUsers("full_name", "asc"));

// const user = {
//   name: "Zlata",
// };

// console.log(user.name);
