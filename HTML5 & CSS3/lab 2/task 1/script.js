var username = localStorage.getItem("username");
var email = localStorage.getItem("email");

if (username && email) {
  document.getElementById("username").value = username;
  document.getElementById("email").value = email;
}

function handleSubmit(e) {
  var formData = new FormData(e.target);
  var data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  if (data.save === "true") {
    localStorage.setItem("username", data.username);
    localStorage.setItem("email", data.email);
  } else {
    localStorage.clear();
  }
}
