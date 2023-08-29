function handleFormSubmit(e) {
  e.preventDefault();
  var msgContainer = document.querySelector(".message");
  var msg = "";
  var formData = new FormData(e.target);

  if (!formData.has("fullName")) {
    msg += "<p>- Name is required</p>";
  }
  if (formData.get("password").length < 8) {
    msg += "<p>- Password must be 8 chars at least</p>";
  }
  if (!formData.get("gender")) {
    msg += "<p>- Please select your gender</p>";
  }
  if (!formData.get("country")) {
    msg += "<p>- Please select your country</p>";
  }
  if (formData.getAll("sports").length < 2) {
    msg += "<p>- Please select 2 sports at least</p>";
  }

  if (msg.length > 0) {
    msgContainer.innerHTML = msg;
    msgContainer.style.display = "grid";
    return;
  }

  window.location.href = "https://google.com";
}

function resetForm() {
  var msgContainer = document.querySelector(".message");
  msgContainer.innerHTML = "";
  msgContainer.style.display = "none";
}
