class Bar {
  constructor() {
    this.barDiv = document.createElement("div");
    this.progress;
    this.tittle = "Minha barra de progresso";
    this.percent = 0;
    this.arrow = "↓";
    this.active = [];
    this.unMarked = [];
    this.modules = [];
    this.Render();
    this.StyleEvents();
    this.markCheckBox();
    this.Progress();
  }

  StyleEvents() {}
  addCheckBox() {
    this.active.push(1);
  }
  markCheckBox(checkbox) {
    if (checkbox.checked) {
      this.unMarked.push(1);
      this.active.pop();
    }
    if (!checkbox.checked) {
      this.active.push(1);
      this.unMarked.pop();
    }
  }

  Progress() {
    let total = 100;
    let marked = this.active.length;
    let done = this.unMarked.length;
    let some = (total * done) / marked;
    some = Math.trunc(some);
    this.progress = some;
    this.percent = some;
  }

  RemoveBar() {
    this.bar.remove();
  }
}

class Event {
  static checkboxClick() {}
  static addClick() {}
  static createBarClick() {}
}

class Render {
  constructor() {
    const newBar = new Bar();
    document.body.appendChild(newBar.barDiv);
    newBar.barDiv.innerHTML = `
    <div class="barPanel">
        <div id="bar">
            <div id="progress">
                <input
                id="text"
                type="text"
                placeholder=${newBar.tittle}></input>
                <p id="percent">${newBar.percent}</p>
                <p id="arrowDown">${newBar.arrow}</p>
            </div>
            <div id="modulesHub">
              <p id="add">+</p>
            </div>
        </div>
    </div>
    `;
  }
}
