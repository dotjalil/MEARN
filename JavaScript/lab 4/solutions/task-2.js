function countElements(tag) {
  var results = document.getElementsByTagName(tag);
  return results.length;
}

function countClasses(className) {
  var results = document.getElementsByClassName(className);
  return results.length;
}

function idExists(idValue) {
  if (document.getElementById(idValue)) {
    return true;
  } else {
    return false;
  }
}

function countElementsWithName(name) {
  var results = document.querySelectorAll(`[name=${name}]`);
  return results.length;
}

function handleShowResults() {
  var tagName = document.querySelector("input#tagName").value;
  var className = document.querySelector("input#className").value;
  var idValue = document.querySelector("input#idName").value;
  var nameAttributeValue = document.querySelector("input#nameAttr").value;
  if (!tagName || !className || !idValue || !nameAttributeValue) {
    alert("Please fill all inputs");
    return;
  }
  var tagNameCount = countElements(tagName);
  var classNameCount = countClasses(className);
  var idValueExists = idExists(idValue);
  var nameAttributeValueCount = countElementsWithName(nameAttributeValue);

  renderResultsToDOM({
    tag: [tagName, tagNameCount],
    className: [className, classNameCount],
    idValue: [idValue, idValueExists],
    nameAttr: [nameAttributeValue, nameAttributeValueCount],
  });
}

function renderResultsToDOM(results) {
  var resultsElementContainer = document.getElementById("result");
  var resultsText = document.createTextNode(
    `${results.tag[0]}: ${results.tag[1]}, Class: ${results.className[1]}, Id: ${results.idValue[1]}, Name: ${results.nameAttr[1]}`
  );
  resultsElementContainer.innerHTML = "";
  resultsElementContainer.appendChild(resultsText);
}
