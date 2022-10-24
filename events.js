console.log("This is seperate JS File");

// #Option - 3............important
function makeRed() {
  document.body.style.backgroundColor = "Red";
}

// #Option - 4............
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// #Option - 5............
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// #Option - 6............
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// #Option - 7............important
document.getElementById("make-orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
