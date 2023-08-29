var userName, phoneNumber, mobileNumber, email, color;

userName = prompt("Enter your name!");
while (/\d+/.test(userName)) {
  userName = prompt("Please enter a valid name string!");
}

phoneNumber = prompt("Enter your phone number!");
while (isNaN(Number(phoneNumber)) || phoneNumber.length !== 8) {
  phoneNumber = prompt("Please enter a valid phone number!");
}

mobileNumber = prompt(
  "Enter your mobile number! (Must be 11 digits and starts with 010, 011, or 012)"
);
while (
  !/^\d+$/.test(mobileNumber) ||
  mobileNumber.length !== 11 ||
  !/^(010|011|012)/.test(mobileNumber)
) {
  mobileNumber = prompt(
    "Please enter a valid mobile number! (Must be 11 digits and starts with 010, 011, or 012)"
  );
}

email = prompt("Enter your email!");
while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  email = prompt("Please enter a valid email! (ex: test@test.com)");
}

color = prompt("Choose a styling color: Red, Green, or Blue");
while (
  color.toLowerCase() !== "red" &&
  color.toLowerCase() !== "green" &&
  color.toLowerCase() !== "blue"
) {
  color = prompt("Please enter a valid color name: Red, Green, or Blue");
}

var today = new Date().toDateString();
var userInfoDiv = document.getElementById("user-info");
userInfoDiv.innerHTML = `
<style>
    .colored {
        color: ${color};
    }
</style>
<h2><span class="colored">Welcome dear</span> ${userName}</h2>
<h2><span class="colored">Your phone number is</span> ${phoneNumber}</h2>
<h2><span class="colored">Your mobile number is</span> ${mobileNumber}</h2>
<h2><span class="colored">Your email address is</span> ${email}</h2>
<h2 style="margin-top: 150px;"><span class="colored">Today is</span> ${today}</h2>
`;
