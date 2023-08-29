var elements = [];

for (let i = 0; i < 3; i++) {
  elements[i] = Number(prompt(`Enter element at position ${i} in the array`));
}

var html = `
<style>
 .styled {
    color: red;
 }
</style>
<h1>Adding -- Multiplying -- and Dividing 3 Values</h1>
<hr>
<h2><span class="styled">Sum of the 3 values: </span>${elements[0]} + ${
  elements[1]
} + ${elements[2]} = ${elements[0] + elements[1] + elements[2]} </h2>
<h2><span class="styled">Multiplication of the 3 values: </span>${
  elements[0]
} * ${elements[1]} * ${elements[2]} = ${
  elements[0] * elements[1] * elements[2]
} </h2>
<h2><span class="styled">Division of the 3 values: </span>${elements[0]} / ${
  elements[1]
} / ${elements[2]} = ${elements[0] / elements[1] / elements[2]} </h2>
`;

var contentElement = document.getElementById("content");
contentElement.innerHTML = html;
