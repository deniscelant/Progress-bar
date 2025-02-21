import * as db from "/db.js";

const hub = document.getElementById("hub");
const createBarButton = document.getElementById("createBarButton");
let activeModules = [];
let markedModules = [];
let unitMod;
let unitMarkedMod;

class panelBar {
  constructor() {}

  //---------------REFACT
  renderBar() {
    const barPanel = document.createElement("div");
    const bar = document.createElement("div");
    const progress = document.createElement("div");
    const text = document.createElement("input");
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

    text.placeholder = "My bar";
    text.type = "text";
    percent.textContent = "0%";
    arrowDown.textContent = "↓";
    add.textContent = "+";

    this.toogleClickEvent(arrowDown, modulesHub, "show", "hidden");
  }

  //---------------REFACT

  createTodo() {
      const inputArea = document.createElement("div");
      const checkBox = document.createElement("input");
      const typeInput = document.createElement("input");

      inputArea.id = "inputArea";
      checkBox.id = "checkBox";
      typeInput.id = "typeInput";

      const modulesHub = document.getElementsByClassName("modulesHub");
      Array.from(modulesHub).forEach((e) => {
        e.appendChild(inputArea);
      });

      inputArea.appendChild(checkBox);
      inputArea.appendChild(typeInput);

      checkBox.type = "checkbox";
      typeInput.type = "text";
      typeInput.placeholder = "Digite aqui...";

  }

  calcProgress() {

      let total = 100;
      let qtd = activeModules.length;
      let doneModule = markedModules.length;
      let some = (total * doneModule) / qtd;
      some = Math.trunc(some);
      console.log(
        "módulos ativos: " + qtd + " módulos marcados: " + doneModule
      );
  }

  changeProgress(some){
    const progress = document.getElementById("progress");
    const percent = document.getElementById("percent");

    progress.style.width = `${some}%`;
    percent.textContent = `${some}%`;
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
createBarButton.onclick = () => {
  panel.renderBar();
};
