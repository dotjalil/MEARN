function displayCourse(options) {
  let defaults = {
    courseName: "Introduction to JavaScript",
    courseDuration: "7 Hours",
    courseOwner: "Mohamed Abduljalil",
  };
  let courseDetails = Object.assign({}, defaults, options);

  for (let key in courseDetails) {
    console.log(`${key}: ${courseDetails[key]}`);
  }
}

/**
 * Tests
 */

/** Test 1 */
// displayCourse({
//   courseName: "Hello World!",
//   courseDuration: "24 Hours",
//   courseOwner: "Mohamed Hammad",
//   courseIntro: "An introduction about JS in modern browser environments",
// });

/** Test 2 */
// displayCourse({
//   courseIntro: "An introduction about JS in modern browser environments",
// });
