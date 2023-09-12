document
  .getElementById("contact-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("You clicked the contact link.");
  });

document.getElementById("show-popup").addEventListener("click", function () {
  alert("This is a popup!");
});
