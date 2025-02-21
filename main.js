import * as db from "/db.js";

const hub = document.getElementById("hub");

class Bar {
  constructor() {}

  static renderBar() {
    const barPanel = document.createElement("div");
    const bar = document.createElement("div");
    const progress = document.createElement("div");
    const text = document.createElement("input");
    const percent = document.createElement("p");
    const arrowDown = document.createElement("p");

    barPanel.classList.add("barPanel");
    barPanel.id = "barPanel";
    bar.id = "bar";
    progress.id = "progress";
    text.id = "text";
    percent.id = "percent";
    arrowDown.id = "arrowDown";

    barPanel.appendChild(bar);
    bar.appendChild(progress);
    progress.appendChild(text);
    progress.appendChild(percent);
    progress.appendChild(arrowDown);

    hub.appendChild(barPanel);

    text.placeholder = "My bar";
    text.type = "text";
    percent.textContent = "0%";
    arrowDown.textContent = "↓";

    // this.toogleClickEvent(arrowDown, modulesHub, "show", "hidden");
  }

  static renderTodoHub() {
    const modulesHub = document.createElement("div");
    const barPanel = document.getElementById("barPanel");

    modulesHub.id = "hidden";
    modulesHub.classList.add("modulesHub");

    const add = document.createElement("p");
    add.id = "add";
    add.textContent = "+";

    modulesHub.appendChild(add);
    barPanel.appendChild(modulesHub);
  }

  static renderCheckBox() {
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

  addModule() {
    let modules = [];
    let check;

    modules.push(check);
  }

  markModule() {
    let done_modules = [];
    let mark_check;

    done_modules.push(mark_check);
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

class Style {
  toogleStyle(parent, child, firstId, secondId) {
    parent.onclick = () => {
      if (child.id == firstId) {
        child.id = secondId;
      } else {
        child.id = firstId;
      }
    };
  }
}

class EventManager {
  constructor(selector){
    this.selector = selector
    
  }

  clickEvent(selector, method) {
    document.querySelector(selector).addEventListener("click", method)
  }
}

const user = new EventManager();
const bar = new Bar();

user.createBar();
user.clickEvent("#arrowDown", render)