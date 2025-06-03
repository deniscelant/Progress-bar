class Bar {
  constructor() {
    this.barDiv;
    this.progress;
    this.tittle = "Minha barra de progresso";
    this.percent = 0;
    this.arrow = "↓";
    this.marked = [];
    this.unMarked = [];
    this.modules = [];
    this.module;
    this.modulesHub;
    this.Render();
    this.StyleEvents();
    this.checkBoxEvents();
    this.Progress();
    this.add = document.querySelector("#add");
    this.checkbox = document.querySelector("#checkbox");
  }

  StyleEvents() {}

  checkBoxEvents() {
    this.add.onclick = () => {
      this.active.push(1);
      this.module = document.createElement("div");
      this.modulesHub = document.querySelector("#modulesHub");
      this.modulesHub.appendChild(this.module);
      this.module.innerHTML = `
        <input id="checkbox" type="checkbox"/>
        <input id="moduleText" type="checkbox"
        placeholder="Nome da tarefa"/>
      `;
    };

     this.checkbox.onclick = () => {
      if (checkbox.checked) {
        this.unMarked.push(1);
        this.active.pop();
      }
      if (!checkbox.checked) {
        this.active.push(1);
        this.unMarked.pop();
      }
    };
  }

  Progress() {
    let total = 100;
    let unmarked = this.unMarked.length;
    let marked = this.marked.length;
    let some = (total * unmarked) / marked;
    some = Math.trunc(some);
    this.progress = some;
    this.percent = some;
  }

  Render() {
    this.barDiv = document.createElement("div");
    document.body.appendChild(this.barDiv);
    this.barDiv.innerHTML = `
    <div class="barPanel">
        <div id="bar">
            <div id="progress">
                <input
                id="tittle"
                type="text"
                placeholder=${this.tittle}></input>
                <p id="percent">${this.percent}</p>
                <p id="arrowDown">${this.arrow}</p>
            </div>
            <div id="modulesHub">
              <p id="add">+</p>
            </div>
        </div>
    </div>
    `;
  }
  RemoveBar() {
    this.bar.remove();
  }

  checkboxClick() {}
  addClick() {}
  createBarClick() {}
}
