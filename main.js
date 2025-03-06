const hub = document.getElementById("hub");
let modulesList = [];
let doneModulesList = [];
let barList = [];

class Bar {
  constructor() {}

  renderBar() {
    const barPanel = document.createElement("div");
    const bar = document.createElement("div");
    const progress = document.createElement("div");
    const text = document.createElement("input");
    const percent = document.createElement("p");
    const arrowDown = document.createElement("p");
    const addInit = document.createElement("p");

    barPanel.classList.add("barPanel");
    barPanel.id = "barPanel";
    bar.id = "bar";
    progress.id = "progress";
    text.id = "text";
    percent.id = "percent";
    arrowDown.id = "arrowDown";
    addInit.id = "addInit";

    barPanel.appendChild(bar);
    bar.appendChild(progress);
    progress.appendChild(text);
    progress.appendChild(percent);
    progress.appendChild(arrowDown);
    progress.appendChild(addInit);

    hub.appendChild(barPanel);

    text.placeholder = "My bar";
    text.type = "text";
    percent.textContent = "0%";

  }

  renderTodoHub() {
    let module = 1;
    modulesList.push(module)
    const modulesHub = document.createElement("div");
    const barPanel = document.getElementById("barPanel");

    modulesHub.classList.add("showModule");

    const add = document.createElement("p");
    add.id = "add";
    add.textContent = "+";

    modulesHub.appendChild(add);
    barPanel.appendChild(modulesHub);

    const eventManager = new EventManager();
    const arrowDown = document.getElementById("arrowDown");
    eventManager.toogleStyle(arrowDown, modulesHub, "showModule", "hideModule");
  }

  renderCheckBox() {
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

  removeBar(barId) {
    let id = barId.id;
    let index = barList.indexOf(id);
    barList.splice(index, 1);
  }


}

class Progress {
  calcProgress(modules, done_modules) {
    let total = 100;
    let active = modules.length;
    let done = done_modules.length;
    let some = (total * done) / active;
    some = Math.trunc(some);
  }

  changeProgress(some, progress, percent) {
    progress.style.width = `${some}%`;
    percent.textContent = `${some}%`;
  }
}

class EventManager {
  constructor(method) {
    this.method = method;
    // this.selector = selector;
  }

  clickBar(selector) {
    const barElement = document.querySelector(selector);
    barElement.addEventListener("click", () => this.method.renderBar());
  }


  toogleStyle(first, second, class1, class2) {
    first.onclick = () => {
      second.classList.toggle(class1);
      second.classList.toggle(class2);
    };
  }
}

const bar = new Bar();
const eventBar = new EventManager(bar);
eventBar.clickBar("#createBarButton");

// if (modulesList.length >= 1) {
//   arrowDown.textContent = "↓";
// } else {
//   addInit.textContent = "+";
// }

// eventManager.toogleStyle(arrowDown, barPanel, "openBarPanel", "barPanel");

// addInit.onclick = this.renderTodoHub();

/*

EVENTS
  - create bar
  - create task
  - check/uncheck task
  - delete task
  - delete bar

CONTROLLER
  - render bar
  - render task
  - comunicate task to DB
  - remove task
  - remove bar

DATABASE
  - bar
  - task

  EVENT_CLICK(){
    
  }
*/