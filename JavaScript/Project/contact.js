function handleFormSubmit(e) {
  e.preventDefault();
  var msgContainer = document.querySelector(".message");
  var msg = "";
  var formData = new FormData(e.target);

  if (!formData.has("fullName")) {
    msg += "<p>- Name is required</p>";
  }
  if (!formData.get("phone")) {
    msg += "<p>- Phone is required</p>";
  }
  if (!formData.get("email")) {
    msg += "<p>- Email is required and must be valid</p>";
  }
  if (!formData.get("comments")) {
    msg += "<p>- Enter your message</p>";
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
