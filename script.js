let button = document.getElementById("btn");
let colorHexName = document.getElementById("hex-value");
let colorHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f "];
let body = document.body.style;

function randomBackgroundHexColor() {
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    hexNumber += colorHex[Math.floor(Math.random() * colorHex.length)];
  }

  body.backgroundColor = hexNumber;
  colorHexName.textContent = hexNumber;
}

button.addEventListener("click", randomBackgroundHexColor);
