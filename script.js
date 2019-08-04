var canv = document.getElementById("canvas");
ctx = canv.getContext("2d");

var shapeHeight = 20;
var shapeWidth = 20;
var colGap = Math.floor(shapeWidth);
var rowGap = Math.floor(shapeHeight);
var rectHeight = Math.floor(shapeHeight / 3);
var colors = ["#ffc234", "#ee384e", "#28406e", "#4fc5df"];


function init() {
  var canvHeight = canv.height = window.innerHeight;
  var canvWidth = canv.width = window.innerWidth;


  var cols = Math.ceil(canvWidth / (shapeWidth + colGap));
  var rows = Math.ceil(canvHeight / (shapeHeight + rowGap));

  for (var iCol = 0; iCol < cols; iCol++) {
    for (var iRow = 0; iRow < rows; iRow++) {

      var shape = rand(0, 3);
      var colOffset = iCol * (shapeWidth + colGap);
      var rowOffset = iRow * (shapeHeight + rowGap);

      ctx.beginPath();

      switch(shape) {
        case 0: drawTraingle(colOffset, rowOffset); break;
        case 1: drawCircle(colOffset, rowOffset); break;
        case 2: drawSquare(colOffset, rowOffset); break;
        case 3: drawRect(colOffset, rowOffset); break;
      }

      ctx.fillStyle = colors[rand(0, 3)];
      ctx.closePath();
      ctx.fill();

    }
  }
}

function drawTraingle(colOffset, rowOffset) {
  ctx.moveTo(colOffset + shapeWidth/2, rowOffset);
  ctx.lineTo(colOffset + shapeWidth, rowOffset + shapeHeight);
  ctx.lineTo(colOffset, rowOffset + shapeHeight);
}

function drawCircle(colOffset, rowOffset) {
  ctx.arc(colOffset + shapeWidth/2, rowOffset + shapeHeight/2, shapeHeight/2, 0, 2 * Math.PI);
}

function drawRect(colOffset, rowOffset) {
  ctx.rect(colOffset, rowOffset + shapeHeight/2 - rectHeight/2, shapeWidth, rectHeight);
}

function drawSquare(colOffset, rowOffset) {
  ctx.rect(colOffset, rowOffset, shapeWidth, shapeHeight);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.pause = false;

window.addEventListener("click", init);
window.addEventListener("resize", init);

// window.addEventListener("mousemove", function () {
//   if (!window.pause) {
//     window.pause = true;
//     init();
//     setTimeout(function () {
//       window.pause = false;
//     }, 100);
//   }
// });

init();