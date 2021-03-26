const parentDiv = document.getElementById("parentDiv");

const boxes = [];

let maxHeight = 600 - 80;
let maxWidth = 800 - 80;

function boxGenerator(num) {
  for (i = 0; i < num; i++) {
    const randomColors = colorGenerate();

    const dx = dxGenerator();
    const dy = dyGenerator();
    const aDiv = document.createElement("div");
    parentDiv.append(aDiv);
    aDiv.setAttribute("name", `aDiv${i}`);
    aDiv.setAttribute(
      "style",
      `position: absolute; top:${dy}px; left:${dx}px; height: 80px;  width: 80px;  border-radius: 50px;  background-color: ${randomColors};`
    );
    boxes.push(aDiv);
    moveObject(2, 2, dx, dy, aDiv);
  }
}

console.log(boxes);

boxGenerator(5);

function dxGenerator() {
  return Math.floor(Math.random() * maxWidth) + 1;
}

function dyGenerator() {
  return Math.floor(Math.random() * maxHeight) + 1;
}

function moveObject(valueX, valueY, dx, dy, aDiv) {
  setInterval(() => {
    dx += valueX;
    aDiv.style.left = dx + "px";

    dy += valueY;
    aDiv.style.top = dy + "px";

    if (dx > maxWidth || dx < 0) {
      valueX = valueX * -1;
    }
    if (dy > maxHeight || dy < 0) {
      valueY = valueY * -1;
    }
  }, 5);
}

function colorGenerate() {
  const colors = [
    "#A52A2A",
    "#7FFFD4",
    "#00FFFF",
    "#FF8C00",
    "#008000",
    "#4B0082",
    "#FF00FF",
  ];

  const colorsNum = Math.floor(Math.random() * colors.length);
  return colors[colorsNum];
}

console.log(colorGenerate());
