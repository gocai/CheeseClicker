import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Add more cheese";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
