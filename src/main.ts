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
  icon: string;
  cost: number;
  rate: number;
  quantity: number;
  desc: string;
}

const availableItems: Item[] = [
  {
    name: "rat",
    icon:"🐀",
    cost: 10,
    rate: 0.1,
    quantity: 0,
    desc: "A small rat that will bring you little bits of cheese.",
  },
  {
    name: "goat",
    icon: "🐐",
    cost: 100,
    rate: 2,
    quantity: 0,
    desc: "Need milk? Just buy the whole goat!",
  },
  {
    name: "cow",
    icon: "🐮",
    cost: 1000,
    rate: 50,
    quantity: 0,
    desc: "Still need milk? Just buy the whole cow!",
  },
  {
    name: "chef",
    icon: "👨‍🍳",
    cost: 10,
    rate: 1,
    quantity: 0,
    desc: "An ameteur cheesemaker. They'll help you out!",
  },
  {
    name: "robo-arm",
    icon: "🦾",
    cost: 1500,
    rate: 10,
    quantity: 0,
    desc: "Attatching this robo-arm will really increase your cheese-making efficiency... at what cost?",
  },
  {
    name: "anabolic steroids",
    icon: "💉",
    cost: 300,
    rate: 4,
    quantity: 0,
    desc: "Your stronger muscles will be able to make cheese faster! I do not condone steroid use.",
  },
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

const row = document.createElement("div");
app.append(row);

function makeButton(){
  for(let i = 0; i < availableItems.length; i++){
    const btn = (document.createElement("button"));
    btn.textContent = `${availableItems[i].icon} = ${availableItems[i].cost.toFixed(0)} Cheese | Owned ${availableItems[i].quantity}`;
    btn.addEventListener("click",()=>{
      if(i <= 2){ 
        autoRate += availableItems[i].rate;
      }
      else if(i > 2){
        growthRate += availableItems[i].rate;
      }
      count -= availableItems[i].cost;
      availableItems[i].cost *= 1.15;
      availableItems[i].quantity++;
      btn.textContent = `${availableItems[i].icon} = ${availableItems[i].cost.toFixed(0)} Cheese | Owned ${availableItems[i].quantity}`;
      updateCounter();
      updateGrowthRate();
      updateAutoRate();
    });
    btn.disabled = true;
    setInterval(()=>{
      if(count < availableItems[i].cost){
        btn.disabled = true;
      }
      else if(count > availableItems[i].cost){
        btn.disabled = false;
      }
    },1);
    btn.id = availableItems[i].name;
    app.append(btn);
  }
}

makeButton();

function autoRateStart() {
  count = count + autoRate;
  updateCounter();
}
setInterval(autoRateStart, 1000);

const growthRateText = document.getElementById("growthRateText")!;
growthRateText.textContent = `Cheese Per Click : ${growthRate}`;
growthRateText.style.transform = "scale(.25)";
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
//step 10, tooltips

//upgradeButton.setAttribute("title", availableItems[1].desc);
//upgradeButton2.setAttribute("title", availableItems[4].desc);
//upgradeButton3.setAttribute("title", availableItems[5].desc);
//upgradeA.setAttribute("title", availableItems[0].desc);
//upgradeB.setAttribute("title", availableItems[2].desc);
//upgradeC.setAttribute("title", availableItems[3].desc);
