var students = [];

function handleAddStudent() {
  var studentName = document.querySelector("input#studentName").value;
  var studentAge = document.querySelector("input#age").value;

  if (studentName.length <= 3 || Number(studentAge) < 18) {
    alert("ممكن نحط داتا مظبوطة بعد اذنك؟ ممكن صح؟");
    var validateInput = confirm("السن فوق ١٨ والاسم اكتر من ٣ حروف، اشطا؟");
    while (!validateInput) {
      validateInput = confirm(
        "مش هنقعد طول النهار في دي،،، السن فوق ١٨ والاسم اكتر من ٣ حروف، اشطا؟"
      );
    }
    return;
  }

  students.push({
    studentName,
    studentAge,
  });
  renderDOM();
}

function handleRemoveStudent(i) {
  students.splice(i, 1);
  renderDOM();
}

function renderDOM() {
  var studentName = document.querySelector("input#studentName");
  var studentAge = document.querySelector("input#age");
  studentName.value = "";
  studentAge.value = "";

  var tableBody = document.getElementById("students");
  if (students.length === 0) {
    tableBody.innerHTML = "<tr><td>New Students Show Up Here</td></tr>";
  } else {
    tableBody.innerHTML = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
    </tr>`;
  }

  students.forEach((student, i) => {
    const studentRow = document.createElement("tr");
    const studentIdCell = document.createElement("td");
    studentIdCell.innerText = i + 1;
    studentRow.appendChild(studentIdCell);

    const studentNameCell = document.createElement("td");
    studentNameCell.innerText = student.studentName;
    studentRow.appendChild(studentNameCell);

    const studentAgeCell = document.createElement("td");
    studentAgeCell.innerText = student.studentAge;
    studentRow.appendChild(studentAgeCell);

    const removeBtnCell = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.setAttribute("onclick", `handleRemoveStudent(${i})`);
    removeBtnCell.appendChild(removeBtn);
    studentRow.appendChild(removeBtnCell);

    tableBody.appendChild(studentRow);
  });
}
