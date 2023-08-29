function handleCreateElement() {
  var result = document.getElementById("result");
  var tagName = document.getElementById("tag").value;
  var color = document.getElementById("color").value;
  var text = document.getElementById("text").value;
  var createdElement = document.createElement(tagName);
  createdElement.style.backgroundColor = color;
  createdElement.innerText = text;
  result.appendChild(createdElement);
}
