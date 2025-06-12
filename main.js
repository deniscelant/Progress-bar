class Bar {
  
  constructor() {
    this.id = 0;
    this.barDiv;
    this.tittle = "Minha barra de progresso";
    this.Render();
  }
  
  static modules = {
    marked: [],
    unMarked: [],
  };

  Progress(progress, percent) {
    let total = 100;
    let unmarked = Bar.modules.unMarked.length;
    let marked = Bar.modules.marked.length;
    let some = (total * unmarked) / marked;
    some = Math.trunc(some);
    progress.style.width = `${some}%`;
    percent.textContent = some;
  }

  Render() {
    this.barDiv = document.createElement("div");
    document.body.appendChild(this.barDiv);
    this.barDiv.innerHTML = `
    <div class="barPanel">
        <div id="bar${this.id++}">
            <div id="progress">
                <input
                id="tittle"
                type="text"
                placeholder=${this.tittle}></input>
                <p id="percent"></p>
            </div>
                <p id="arrow" class="arrow">↓</p>
            <div id="modulesHub">
              <p id="add" class="add">+</p>
            </div>
        </div>
    </div>
    `;
  }

  RemoveBar() {
    this.barDiv.remove();
  }

  handleCheck(checkbox) {
    if (checkbox.checked) {
      Bar.modules.unMarked.push(1);
      Bar.modules.marked.pop();
    }
    if (!checkbox.checked) {
      Bar.modules.marked.push(1);
      Bar.modules.unMarked.pop();
    }

    const par = checkbox.closest(`#bar${this.id}`)
    const progress = par.querySelector("#progress")
    const percent = par.querySelector("#percent")
    this.Progress(progress, percent)
  }

  addModule(moduleHub) {
    this.modules.unMarked.push(1);
    const module = document.createElement("div");
    moduleHub.appendChild(module);
    module.innerHTML = `
        <input id="checkbox" class="checkbox" type="checkbox"/>
        <input id="moduleText" type="text"
        placeholder="Nome da tarefa"/>
      `;
  }

  hideArrow(arrow) {
    const par2 = arrow.closest("#bar");
    const child = par2.querySelector("#modulesHub");
    if (arrow.textContent === "↓") {
      child.style.display = "none";
      arrow.textContent = "↑";
    }
    else if (arrow.textContent === "↑") {
      child.style.display = "initial";
      arrow.textContent = "↓";
    }
  }
}

document.querySelector("#createBarButton").onclick = () => new Bar()
// Bar.Render()

document.onclick = (e) => {
  if (e.target.id == "add") {
    Bar.addModule(e.target);
  }
  if ((e.target.id == "checkbox")) {
    Bar.handleCheck(e.target);
  }
  if ((e.target.id == "arrow")) {
    Bar.hideArrow(e.target);
  }

};