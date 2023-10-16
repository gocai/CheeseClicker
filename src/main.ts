import "./style.css";
//Game Title
const app: HTMLDivElement = document.querySelector("#app")!;
const gameName = "Add more cheese";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;

//formatting stuff
const countDisplay = document.getElementById("count")!;
const countButton = document.getElementById("cheese")!;
countDisplay.style.margin = "auto";
countDisplay.style.textAlign = "center";
countDisplay.style.color = "orange";
countButton.style.textAlign = "center";
countButton.style.marginTop = "20px";

app.append(header);
app.append(countDisplay);
app.append(countButton);

//step 2
let count: number = 0;

countButton.addEventListener("click", incrementCount);
updateCounter();

function incrementCount() {
  count++;
  updateCounter();
}
function updateCounter() {
  countDisplay.textContent = `${count} 🧀`;
}

//step 4
let lastTimestamp: number = performance.now();
const countFrames = 1 / 60;
const countRate: number = 0;
function incrementAuto(timestamp: number) {
  const deltaTime = (timestamp - lastTimestamp) / 1000;
  count += (countFrames + countRate) * deltaTime;
  updateCounter();
  lastTimestamp = timestamp;
  requestAnimationFrame(incrementAuto);
}

requestAnimationFrame(incrementAuto);
