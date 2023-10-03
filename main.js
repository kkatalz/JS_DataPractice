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

function convertRandomUserMock(randomUsers) {
  const mappedRandomUsers = randomUsers.map((user) => {
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

  const mappedAdditionalUsers = additionalUsers.map((user) => {
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

console.log(convertRandomUserMock(randomUserMock));
