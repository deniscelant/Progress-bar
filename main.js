class Bar {
  constructor() {
    this.barDiv;
    this.tittle = "My Bar";
    this.percent = 0;
    this.modules = {
      marked: [],
      empty: [],
    };
    this.progress;
    this.modulesHub;
  }

  Progress() {
    const total = 100;
    let empty = this.modules.empty.length;
    let marked = this.modules.marked.length;
    let some = (marked * total) / empty;
    some = Math.trunc(some);
    this.progress = some;
    this.percent = some;

    const close = checkbox.closest("#bar");
    const progress = close.querySelector("#progress");
    const percent = close.querySelector("#percent");
    progress.style.width = `${this.progress}px`;
    percent.textContent = this.percent;
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

  checkboxClick(checkbox) {
    if (!checkbox.checked) {
      //empty
      this.modules.empty.push(1);
      this.modules.marked.pop();
    }
    if (checkbox.checked) {
      //marked
      this.modules.empty.pop();
      this.modules.marked.push(1);
    }
  }

  addClick(moduleHub) {
    this.modules.empty.push(1);
    const module = document.createElement("div");
    moduleHub.appendChild(module);
    module.innerHTML = `
        <input id="checkbox" class="checkbox" type="checkbox"/>
        <input id="moduleText" type="text"
        placeholder="Nome da tarefa"/>
      `;
    bar.Progress(document.querySelector("#checkbox"));

  }

  arrowClick(arrow) {
    const par2 = arrow.closest("#bar");
    const child = par2.querySelector("#modulesHub");
    if (arrow.textContent === "↓") {
      child.style.display = "none";
      arrow.textContent = "↑";
    } else if (arrow.textContent === "↑") {
      child.style.display = "initial";
      arrow.textContent = "↓";
    }
  }
}

const bar = new Bar();
document.querySelector("#createBarButton").onclick = () => bar.Render();
// bar.Render()

document.onclick = (e) => {
  if (e.target.id == "add") {
    bar.addClick(e.target);
  }
  if (e.target.id == "checkbox") {
    bar.checkboxClick(e.target);
    bar.Progress(e.target);
  }
  if (e.target.id == "arrow") {
    bar.arrowClick(e.target);
  }
};
