const randomRestBtn = document.querySelector("#random-restaurant");
const randomText = document.createElement("p");
const restOptions = [
  "Punch Pizza",
  "GreenMill",
  "Groveland Tap",
  "Highland Grill",
];
getRandomRest = () => {
  randomText.textContent = "";
  let randomIndex = Math.floor(Math.random() * restOptions.length);
  let randomSelect = restOptions[randomIndex];

  randomText.textContent = `${restOptions[randomIndex]}`;
  document.querySelector("#random").appendChild(randomText);
};

randomRestBtn.addEventListener("click", getRandomRest);
