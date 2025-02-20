import * as db from "/db.js";

const hub = document.getElementById("hub");
const createBarButton = document.getElementById("createBarButton");
let activeModules = [];
let unitMod;

class panelBar {
  constructor() {}
  createBar(name) {
    this.renderBar(name);
    // this.changeBarState();
  }

  progressBar(bar, percent) {
    let total = 100;
    let qtd = 10;
    let doneModule = 5;
    let some = (total * doneModule) / qtd;
    some = Math.trunc(some);
    bar.style.width = `${some}%`;
    percent.textContent = `${some}%`;
    console.log(bar);
  }

  user(name, bars) {
    name = name;
    bars = bars;
  }

  renderBar(name) {
    const barPanel = document.createElement("div");
    const bar = document.createElement("div");
    const progress = document.createElement("div");
    const text = document.createElement("h3");
    const percent = document.createElement("p");
    const arrowDown = document.createElement("p");
    const modulesHub = document.createElement("div");
    const add = document.createElement("p");

    barPanel.classList.add("barPanel");
    barPanel.id = "barPanel";
    bar.id = "bar";
    progress.id = "progress";
    text.id = "text";
    percent.id = "percent";
    arrowDown.id = "arrowDown";
    modulesHub.id = "hidden";
    modulesHub.classList.add("modulesHub");
    add.id = "add";

    barPanel.appendChild(bar);
    bar.appendChild(progress);
    progress.appendChild(text);
    progress.appendChild(percent);
    progress.appendChild(arrowDown);
    barPanel.appendChild(modulesHub);
    modulesHub.appendChild(add);

    hub.appendChild(barPanel);

    text.textContent = name;
    percent.textContent = "0%";
    arrowDown.textContent = "↓";
    add.textContent = "+";

    // if(activeModules.length == 0){

    //     arrowDown.textContent = "";
    //     add.textContent = "+";
    // } else if (activeModules.length > 0){
    //     arrowDown.textContent = "↓";
    //     add.textContent = "";

    // }

    this.progressBar(progress, percent);
    this.toogleClickEvent(arrowDown, modulesHub, "show", "hidden");
    add.onclick = () => {

        this.createTodo()
    }
  }

  changeBarState() {
    const arrowDown = document.querySelector("#arrowDown");
    const modulesHub = document.getElementById("modulesHub");

    this.toogleClickEvent(arrowDown, modulesHub, "show", "hidden");
  }

  createTodo() {
    const arrowDown = document.querySelector("#arrowDown");

    // unitMod += 1
    // activeModules.push(unitMod)

    const inputArea = document.createElement("div");
    const checkBox = document.createElement("input");
    const typeInput = document.createElement("input");

    inputArea.id = "inputArea";
    checkBox.id = "check";
    typeInput.id = "typeInput";

    const modulesHub = document.getElementsByClassName("modulesHub");
    Array.from(modulesHub).forEach((e) => {e.appendChild(inputArea)});
    inputArea.appendChild(checkBox);
    inputArea.appendChild(typeInput);

    checkBox.type = "checkbox";
    typeInput.type = "text";
    typeInput.placeholder = "Digite aqui...";

    this.toogleClickEvent(arrowDown, inputArea, "showModule", "hideModule");
  }

  toogleClickEvent(parent, child, firstId, secondId) {
    parent.onclick = () => {
      if (child.id == firstId) {
        child.id = secondId;
      } else {
        child.id = firstId;
      }
    };
  }
}

const panel = new panelBar();
panel.createBar("Front end 2026");
