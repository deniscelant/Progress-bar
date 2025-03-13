const hub = document.getElementById("hub");
let modulesList = [];
let doneModulesList = [];
let barList = [];

let bar_id = 1;
let todo_id = 1;

class Bar {
  constructor() {}

  static renderBar() {
    const barPanel = document.createElement("div");
    const bar = document.createElement("div");
    const progress = document.createElement("div");
    const text = document.createElement("input");
    const percent = document.createElement("p");
    const arrow = document.createElement("p");

    barPanel.classList.add("barPanel");
    bar.classList.add("bar");
    progress.classList.add("progress");
    percent.classList.add("percent");
    arrow.classList.add("arrow");

    barPanel.id = `barPanel${bar_id++}`;
    bar.id = `bar${bar_id++}`;
    progress.id = `progress${bar_id++}`;
    text.id = `text${bar_id++}`;
    percent.id = `percent${bar_id++}`;
    arrow.id = `arrow${bar_id++}`;

    barPanel.appendChild(bar);
    bar.appendChild(progress);
    progress.appendChild(text);
    progress.appendChild(percent);
    progress.appendChild(arrow);
    hub.appendChild(barPanel);

    text.placeholder = "My bar";
    text.type = "text";
    percent.textContent = "0%";
    arrow.textContent = "↓";

    const modulesHub = document.createElement("div");

    modulesHub.classList.add("modulesHub");

    const add = document.createElement("p");
    // modulesHub.id = "modulesHub";
    add.id = `add${bar_id++}`;
    add.textContent = "+";

    modulesHub.appendChild(add);
    barPanel.appendChild(modulesHub);

    EventManager.checkParagraph();
  }

  static renderCheckBox(element) {
    const inputArea = document.createElement("div");
    const checkBox = document.createElement("input");
    const typeInput = document.createElement("input");

    inputArea.id = `inputArea${todo_id++}`;
    checkBox.id = `checkbox${todo_id++}`;
    typeInput.id = `typeInput${todo_id++}`;

    inputArea.appendChild(checkBox);
    inputArea.appendChild(typeInput);
    element.appendChild(inputArea);

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

  static checkParagraph() {
    const p = document.querySelectorAll("p");

    Array.from(p).forEach((pr) => {
      pr.onclick = () => {
        if (pr.id === `arrow${bar_id}`) {
          const modulesHub = document.getElementsByClassName("modulesHub");
          Array.from(modulesHub).forEach((module) => {
            Styles.changeDisplay(module);
          });
        }
        const text = pr.id;
        text.replace(/[0-9]/g, '')
        if (pr.id === text) {
          const modulesHub = document.getElementsByClassName("modulesHub");
          Array.from(modulesHub).forEach((module) => {
            Bar.renderCheckBox(module);
          });
        }

        console.log(pr.id);
      };
    });
  }
}

class Styles {
  static changeDisplay(element) {
    if (element.style.display == "initial") {
      element.style.display = "none";
    } else if (element.style.display == "none") {
      element.style.display = "block";
    }
  }
}

const eventBar = new EventManager();
const createBarButton = document.getElementById("createBarButton");

createBarButton.onclick = () => {
  Bar.renderBar();
};
