function handleGenerate() {
  var color = document.getElementById("color").value;
  var canvas = document.getElementById("mycanvas");
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;

    var radius = Math.random() * 25 + 5;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  }
}
