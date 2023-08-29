var msg = prompt("Enter your message");

const body = document.getElementsByTagName("body")[0];

for (let i = 0; i < 6; i++) {
  let heading = document.createElement(`h${i + 1}`);
  heading.innerText = msg;
  body.append(heading);
}
