import "./style.css";
//Game Title
const app: HTMLDivElement = document.querySelector("#app")!;
const gameName = "🧀 Clicker";
document.title = gameName;
const header = document.createElement("h1");
header.innerHTML = gameName;

//formatting stuff
const row0 = document.createElement("div");
const countDisplay = document.getElementById("count")!;
const countButton = document.getElementById("cheese")!;
//countDisplay.style.margin = "auto";
//countDisplay.style.textAlign = "center";
countDisplay.style.color = "orange";
countDisplay.style.transform = "scale(0.35)";
countButton.style.textAlign = "center";
countButton.style.marginTop = "20px";
countButton.style.transform = "scale(2)";
app.append(header);
app.append(row0);
app.append(countDisplay);
app.append(countButton);

//step 2
let count: number = 0;
let autoRate: number = 0;
let growthRate: number = 1;
//let rats: number = 0;
//let goats: number = 0;
//let cows: number = 0;

//COSTS
//let chefCost: number = 10;
//let ratCost: number = 10;
//let goatCost: number = 100;
//let cowCost: number = 1000;

//data driven design
interface Item {
  name: string;
  cost: number;
  rate: number;
  quantity: number;
}

const availableItems: Item[] = [
  { name: "rat", cost: 10, rate: 0.1, quantity: 0 },
  { name: "chef", cost: 10, rate: 1, quantity: 0 },
  { name: "goat", cost: 100, rate: 2, quantity: 0 },
  { name: "cow", cost: 1000, rate: 50, quantity: 0 },
  { name: "robo-arm", cost: 1500, rate: 10, quantity: 0 },
  { name: "anabolic steroids", cost: 300, rate: 4, quantity: 0 },
];

countButton.addEventListener("click", incrementCount);
updateCounter();

function incrementCount() {
  count += growthRate;
  updateCounter();
}
function updateCounter() {
  countDisplay.textContent = `${count.toFixed(0)} 🧀`;
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
upgradeButton.textContent = `👨‍🍳 = ${availableItems[1].cost.toFixed(
  0,
)} Cheese | Owned: ${availableItems[1].quantity}`;
upgradeButton.disabled = true;
upgradeButton.addEventListener("click", upgradeCount);
function upgradeCount() {
  growthRate += availableItems[1].rate;
  count -= availableItems[1].cost;
  availableItems[1].cost *= 1.15;
  availableItems[1].quantity++;
  updateCounter();
  updateGrowthRate();
  upgradeButton.textContent = `👨‍🍳 = ${availableItems[1].cost.toFixed(
    0,
  )} Cheese | Owned: ${availableItems[1].quantity}`;
}
const upgradeButton2 = document.createElement("button");
upgradeButton2.textContent = `🦾  = ${availableItems[4].cost.toFixed(
  0,
)} Cheese | Owned: ${availableItems[4].quantity}`;
upgradeButton2.addEventListener("click", upgradeCount2);
//checks to see if u have enough cheese for upgrades
function upgradeCount2() {
  growthRate += availableItems[4].rate;
  count -= availableItems[4].cost;
  availableItems[4].cost *= 1.15;
  availableItems[4].quantity++;
  updateCounter();
  updateGrowthRate();
  upgradeButton2.textContent = `🦾  = ${availableItems[4].cost.toFixed(
    0,
  )} Cheese | Owned: ${availableItems[4].quantity}`;
}
const upgradeButton3 = document.createElement("button");
upgradeButton3.textContent = `💉  = ${availableItems[5].cost.toFixed(
  0,
)} Cheese | Owned: ${availableItems[5].quantity}`;
upgradeButton3.addEventListener("click", upgradeCount3);
function upgradeCount3() {
  growthRate += availableItems[5].rate;
  count -= availableItems[5].cost;
  availableItems[5].cost *= 1.15;
  availableItems[5].quantity++;
  updateCounter();
  updateGrowthRate();
  upgradeButton3.textContent = `💉  = ${availableItems[5].cost.toFixed(
    0,
  )} Cheese | Owned: ${availableItems[5].quantity}`;
}

function upgradeCheck() {
  if (count < availableItems[1].cost) {
    upgradeButton.disabled = true;
  } else {
    upgradeButton.disabled = false;
  }
}
function upgradeACheck() {
  if (count < availableItems[0].cost) {
    upgradeA.disabled = true;
  } else {
    upgradeA.disabled = false;
  }
}
function upgradeBCheck() {
  if (count < availableItems[2].cost) {
    upgradeB.disabled = true;
  } else {
    upgradeB.disabled = false;
  }
}
function upgradeCCheck() {
  if (count < availableItems[3].cost) {
    upgradeC.disabled = true;
  } else {
    upgradeC.disabled = false;
  }
}
function upgrade2Check() {
  if (count < availableItems[4].cost) {
    upgradeButton2.disabled = true;
  } else {
    upgradeButton2.disabled = false;
  }
}
function upgrade3Check() {
  if (count < availableItems[5].cost) {
    upgradeButton3.disabled = true;
  } else {
    upgradeButton3.disabled = false;
  }
}
const upgradeA = document.createElement("button");
upgradeA.textContent = `🐀 = ${availableItems[0].cost.toFixed(
  0,
)} Cheese | Owned: ${availableItems[0].quantity}`;
upgradeA.addEventListener("click", upgradeAfunction);
function upgradeAfunction() {
  autoRate += availableItems[0].rate;
  count -= availableItems[0].cost;
  availableItems[0].quantity++;
  availableItems[0].cost *= 1.5;
  updateCounter();
  updateAutoRate();
  upgradeA.textContent = `🐀 = ${availableItems[0].cost.toFixed(
    0,
  )} Cheese | Owned: ${availableItems[0].quantity}`;
}

const upgradeB = document.createElement("button");
upgradeB.textContent = `🐐= ${availableItems[2].cost.toFixed(
  0,
)} Cheese | Owned: ${availableItems[2].quantity}`;
const upgradeC = document.createElement("button");
upgradeC.textContent = `🐮= ${availableItems[3].cost.toFixed(
  0,
)} Cheese | Owned: ${availableItems[3].quantity}`;

upgradeB.addEventListener("click", upgradeBfunction);
function upgradeBfunction() {
  autoRate += availableItems[2].rate;
  count -= availableItems[2].cost;
  availableItems[2].quantity++;
  availableItems[2].cost *= 1.5;
  updateCounter();
  updateAutoRate();
  upgradeB.textContent = `🐐= ${availableItems[2].cost.toFixed(
    0,
  )} Cheese | Owned: ${availableItems[2].quantity}`;
}
upgradeC.addEventListener("click", upgradeCfunction);
function upgradeCfunction() {
  autoRate += availableItems[3].rate;
  count -= availableItems[3].cost;
  availableItems[3].quantity++;
  availableItems[3].cost *= 1.5;
  updateCounter();
  updateAutoRate();
  upgradeC.textContent = `🐮= ${availableItems[3].cost.toFixed(
    0,
  )} Cheese | Owned: ${availableItems[3].quantity}`;
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
setInterval(upgrade2Check, 1);
setInterval(upgrade3Check, 1);
upgradeButton.style.marginTop = "10px";
const row1 = document.createElement("div");
app.append(row1);
app.append(upgradeButton);
app.append(upgradeButton3);
app.append(upgradeButton2);
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
