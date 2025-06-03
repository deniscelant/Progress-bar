class Bar {
  constructor() {
    this.barDiv;
    this.Render();
    this.tittle = "Minha barra de progresso";
    this.percent = 0;
    this.marked = [];
    this.unMarked = [];
    this.modules = [];
    this.module;
    this.progress = document.querySelector("#progress");
    this.arrow = document.querySelector("#arrow");
    this.add = document.querySelector("#add");
    this.modulesHub = document.querySelector("#modulesHub");
    this.checkbox = document.querySelector("#checkbox");
    this.Events();
    this.Progress();
  }

  Events(){

    this.arrow.onclick = () => {
      if(this.arrow.textContent == "↓"){
        this.modulesHub.style.display = "initial";
        this.arrow.textContent = "↑"
      }
      if(this.arrow.textContent == "↑"){
        this.modulesHub.style.display = "none";
        this.arrow.textContent = "↓"
      }
    }

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
    this.progress.style.width = some;
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
                <p id="arrow">↓</p>
            </div>
            <div id="modulesHub">
              <p id="add">+</p>
            </div>
        </div>
    </div>
    `;
  }
  RemoveBar() {
    this.barDiv.remove();
  }

  checkboxClick() {}
  addClick() {}
  createBarClick() {}
}

document.querySelector("#createBarButton").onclick = () => new Bar()