var numbers = [];

for (let i = 0; i < 5; i++) {
  numbers[i] = Number(
    prompt(`Enter the number at position ${i} in the array:`)
  );
}

var html = `
<style>
    .styled {
        color: red;
    }
</style>
<h1>Sorting</h1>
<hr>
<h2><span class="styled">Entered values: </span>${numbers.join(", ")}</h2>
<h2><span class="styled">Array sorted descending: </span>${numbers
  .sort()
  .reverse()
  .join(", ")}</h2>
  <h2><span class="styled">Array sorted ascending: </span>${numbers
    .sort()
    .join(", ")}</h2>
`;

var contentElement = document.getElementById("content");
contentElement.innerHTML = html;
