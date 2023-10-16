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
countButton.style.transform = "scale(1.5)";
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

//COSTS
let chefCost: number = 10;
let ratCost: number = 10;
let goatCost: number = 100;
let cowCost: number = 1000;

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
upgradeButton.textContent = `👨‍🍳 = ${chefCost} Cheese`;
upgradeButton.disabled = true;
upgradeButton.addEventListener("click", upgradeCount);
function upgradeCount() {
  growthRate++;
  count -= chefCost;
  chefCost *= 1.15;
  updateCounter();
  updateGrowthRate();
  upgradeButton.textContent = `👨‍🍳 = ${chefCost} Cheese`;
}
//checks to see if u have enough cheese for upgrades
function upgradeCheck() {
  if (count < chefCost) {
    upgradeButton.disabled = true;
  } else {
    upgradeButton.disabled = false;
  }
}
function upgradeACheck() {
  if (count < ratCost) {
    upgradeA.disabled = true;
  } else {
    upgradeA.disabled = false;
  }
}
function upgradeBCheck() {
  if (count < goatCost) {
    upgradeB.disabled = true;
  } else {
    upgradeB.disabled = false;
  }
}
function upgradeCCheck() {
  if (count < cowCost) {
    upgradeC.disabled = true;
  } else {
    upgradeC.disabled = false;
  }
}
const upgradeA = document.createElement("button");
upgradeA.textContent = `🐀 = ${ratCost} Cheese | Owned: ${rats}`;
upgradeA.addEventListener("click", upgradeAfunction);
function upgradeAfunction() {
  autoRate += 0.1;
  count -= ratCost;
  rats++;
  ratCost *= 1.5;
  updateCounter();
  updateAutoRate();
  upgradeA.textContent = `🐀 = ${ratCost} Cheese | Owned: ${rats}`;
}

const upgradeB = document.createElement("button");
upgradeB.textContent = `🐐= ${goatCost} Cheese | Owned: ${goats}`;
const upgradeC = document.createElement("button");
upgradeC.textContent = `🐮= ${cowCost} Cheese | Owned: ${cows}`;

upgradeB.addEventListener("click", upgradeBfunction);
function upgradeBfunction() {
  autoRate += 2;
  count -= goatCost;
  goats++;
  goatCost *= 1.5;
  updateCounter();
  updateAutoRate();
  upgradeB.textContent = `🐐= ${goatCost} Cheese | Owned: ${goats}`;
}
upgradeC.addEventListener("click", upgradeCfunction);
function upgradeCfunction() {
  autoRate += 50;
  count -= cowCost;
  cows++;
  cowCost *= 1.5;
  updateCounter();
  updateAutoRate();
  upgradeC.textContent = `🐮= ${cowCost} Cheese | Owned: ${cows}`;
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
//step 8
