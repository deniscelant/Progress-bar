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
    const openArrow = document.createElement("p");
    const closeArrow = document.createElement("p");

    openArrow.classList.add("arrows");
    closeArrow.classList.add("arrows");
    barPanel.classList.add("barPanel");
    bar.classList.add("bar");
    progress.classList.add("progress");
    percent.classList.add("percent");

    barPanel.id = "barPanel";
    bar.id = "bar";
    progress.id = "progress";
    text.id = "text";
    percent.id = "percent";
    closeArrow.id = "closeArrow";

    barPanel.appendChild(bar);
    barPanel.appendChild(openArrow);
    barPanel.appendChild(closeArrow);
    bar.appendChild(progress);
    progress.appendChild(text);
    progress.appendChild(percent);
    hub.appendChild(barPanel);

    text.placeholder = "My bar";
    text.type = "text";
    percent.textContent = "0%";
    openArrow.textContent = "↑";
    closeArrow.textContent = "↓";

    closeArrow.style.display = "none";

    const modulesHub = document.createElement("div");

    modulesHub.classList.add("modulesHub");
    modulesHub.style.display = "none";

    openArrow.onclick = () => {
      openArrow.style.display = "none";
      closeArrow.style.display = "initial";
      modulesHub.style.display = "initial";
    };

    closeArrow.onclick = () => {
      closeArrow.style.display = "none";
      openArrow.style.display = "initial";
      modulesHub.style.display = "none";
    };

    const add = document.createElement("p");
    // modulesHub.id = "modulesHub";
    add.id = `add${bar_id++}`;
    add.textContent = "+";
    add.classList.add("add");

    modulesHub.appendChild(add);
    barPanel.appendChild(modulesHub);

    // EventManager.checkArrow();
    EventManager.checkAdd();
  }

  static renderCheckBox(element) {
    const inputArea = document.createElement("div");
    const checkBox = document.createElement("input");
    const typeInput = document.createElement("input");

    inputArea.id = "inputArea";
    checkBox.id = "checkbox";
    typeInput.id = "typeInput";

    checkBox.classList.add("checkBoxes");
    inputArea.appendChild(checkBox);
    inputArea.appendChild(typeInput);
    element.appendChild(inputArea);

    checkBox.type = "checkbox";
    typeInput.type = "text";
    typeInput.placeholder = "Digite aqui...";

    EventManager.handleMarkedCheckBox();
    EventManager.handleCheckBox();
  }

  removeBar(barId) {
    let id = barId.id;
    let index = barList.indexOf(id);
    barList.splice(index, 1);
  }
}

class Progress {
  static calcProgress(progress, percent) {
    let total = 100;
    let active = modulesList.length;
    let done = doneModulesList.length;
    let some = (total * done) / active;
    some = Math.trunc(some);
    progress.style.width = `${some}%`;
    percent.textContent = `${some}%`;
  }
}

class EventManager {
  constructor() {
    // this.selector = selector;
  }

  static checkArrow() {
    const closeArrow = document.getElementsByClassName("closeArrow");
    Array.from(closeArrow).forEach((arrow) => {
      arrow.onclick = () => {
        Styles.toogleParentStyle(
          arrow.parentElement,
          "openBarPanel",
          "barPanel"
        );
      };
    });
  }

  static checkAdd() {
    const addButton = document.getElementsByClassName("add");
    Array.from(addButton).forEach((add) => {
      add.onclick = () => {
        Bar.renderCheckBox(add.parentElement);
      };
    });
  }

  static handleMarkedCheckBox() {
    const checkBoxes = document.getElementsByClassName("checkBoxes");
    Array.from(checkBoxes).forEach((checkbox) => {
      checkbox.onclick = () => {
        doneModulesList.push(checkbox);
        const progress = document.getElementById("progress");
        const percent = document.getElementById("percent");

        Progress.calcProgress(progress, percent);
      };
    });
  }

  static handleCheckBox() {
    const checkBoxes = document.getElementsByClassName("checkBoxes");
    const arrCheckBoxes = Array.from(checkBoxes);
    const twoCheckBoxArray = [];
    modulesList = arrCheckBoxes.concat(twoCheckBoxArray);
    console.log(modulesList);
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

  static toogleParentStyle(parent, first, second) {
    parent.classList.toggle(first);
    parent.classList.toggle(second);
  }
}

const createBarButton = document.getElementById("createBarButton");

createBarButton.onclick = () => {
  Bar.renderBar();
};
