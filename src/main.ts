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
let autoRate: number = 0;
let growthRate: number = 1;
let rats: number = 0;
let goats: number = 0;
let cows: number = 0;

countButton.addEventListener("click", incrementCount);
updateCounter();

function incrementCount() {
  count += growthRate;
  updateCounter();
}
function updateCounter() {
  countDisplay.textContent = `${count} 🧀`;
}

/*step 4
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

requestAnimationFrame(incrementAuto);*/

//step 5
const upgradeButton = document.createElement("button");
upgradeButton.textContent = "👨‍🍳 = 10 Cheese";
upgradeButton.disabled = true;
upgradeButton.addEventListener("click", upgradeCount);
function upgradeCount() {
  growthRate++;
  count -= 10;
  updateCounter();
  updateGrowthRate();
}
//checks to see if u have enough cheese for upgrades
function upgradeCheck() {
  if (count < 10) {
    upgradeButton.disabled = true;
  } else {
    upgradeButton.disabled = false;
  }
}
function upgradeACheck() {
  if (count < 10) {
    upgradeA.disabled = true;
  } else {
    upgradeA.disabled = false;
  }
}
function upgradeBCheck() {
  if (count < 100) {
    upgradeB.disabled = true;
  } else {
    upgradeB.disabled = false;
  }
}
function upgradeCCheck() {
  if (count < 1000) {
    upgradeC.disabled = true;
  } else {
    upgradeC.disabled = false;
  }
}
const upgradeA = document.createElement("button");
upgradeA.textContent = `🐀 = 10 Cheese | Owned: ${rats}`;
upgradeA.addEventListener("click", upgradeAfunction);
function upgradeAfunction() {
  autoRate += 0.1;
  count -= 10;
  rats++;
  updateCounter();
  updateAutoRate();
}

const upgradeB = document.createElement("button");
upgradeB.textContent = `🐐= 100 Cheese | Owned: ${goats}`;
const upgradeC = document.createElement("button");
upgradeC.textContent = `🐮= 1000 Cheese | Owned: ${cows}`;

upgradeB.addEventListener("click", upgradeBfunction);
function upgradeBfunction() {
  autoRate += 2;
  count -= 100;
  goats++;
  updateCounter();
  updateAutoRate();
  upgradeB.textContent = `🐐= 100 Cheese | Owned: ${goats}`;
}
upgradeC.addEventListener("click", upgradeCfunction);
function upgradeCfunction() {
  autoRate += 50;
  count -= 1000;
  cows++;
  updateCounter();
  updateAutoRate();
  upgradeC.textContent = `🐮= 1000 Cheese | Owned: ${cows}`;
}

function autoRateStart() {
  count = count + autoRate;
  updateCounter();
}
setInterval(autoRateStart, 1000);
//interval to check if upgrade is affordable
setInterval(upgradeCheck, 1);
setInterval(upgradeACheck, 1);
setInterval(upgradeBCheck, 1);
setInterval(upgradeCCheck, 1);
upgradeButton.style.marginTop = "10px";
const row1 = document.createElement("div");
app.append(row1);
app.append(upgradeButton);
const row2 = document.createElement("div");
app.append(row2);
app.append(upgradeA);
app.append(upgradeB);
app.append(upgradeC);
//step 6
const growthRateText = document.getElementById("growthRateText")!;
growthRateText.textContent = `Cheese Per Click : ${growthRate}`;
growthRateText.style.transform = "scale(.25)";
//const row3 = document.createElement("div");
const autoRateText = document.getElementById("autoRateText")!;
autoRateText.textContent = `Cheese Per Second : ${autoRate}`;
autoRateText.style.transform = "scale(.25)";
//app.append(row3);
app.append(growthRateText);
app.append(autoRateText);
autoRateText.style.textAlign = "center";

function updateAutoRate() {
  autoRateText.textContent = `Cheese Per Second : ${autoRate}`;
}
function updateGrowthRate() {
  growthRateText.textContent = `Cheese Per Click : ${growthRate}`;
}
