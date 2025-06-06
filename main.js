class Bar {
  constructor() {
    this.barDiv;
    this.tittle = "Minha barra de progresso";
    this.percent = 0;
    this.modules = {
      marked: [],
      unMarked: [],
    };
    this.progress;
    this.Progress();
  }

  Progress() {
    let total = 100;
    let unmarked = this.modules.unMarked.length;
    let marked = this.modules.marked.length;
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
                <p id="arrow" class="arrow">↓</p>
            </div>
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
    if (checkbox.checked) {
      this.modules.unMarked.push(1);
      this.modules.marked.pop();
    }
    if (!checkbox.checked) {
      this.modules.marked.push(1);
      this.modules.unMarked.pop();
    }
  }

  addClick(moduleHub) {
    this.modules.unMarked.push(1);
    const module = document.createElement("div");
    moduleHub.appendChild(module);
    module.innerHTML = `
        <input id="checkbox" class="checkbox" type="checkbox"/>
        <input id="moduleText" type="checkbox"
        placeholder="Nome da tarefa"/>
      `;
  }

  arrowClick(arrow) {
    const modulesHub = document.querySelector("#modulesHub")
    if (arrow.textContent == "↓") {
      modulesHub.style.display = "initial";
      arrow.textContent = "↑";
    }
    if (arrow.textContent == "↑") {
      modulesHub.style.display = "none";
      arrow.textContent = "↓";
    }
  }
}

// class Event {
//   constructor(item, func) {
//     this.item = item;
//     func = this.clickMethod();
//   }

//   clickMethod() {
//     this.item.onclick = (e) => {
//       if (e.target.matches(".add")) {
//         Bar.addClick();
//       }
//       if (e.target.matches(".checkbox")) {
//         const chk = e.currentTarget;
//         Bar.checkboxClick(chk);
//       }
//     };
//   }
// }

const bar = new Bar();
document.querySelector("#createBarButton").onclick = () => bar.Render();

document.onclick = (e) => {
  if (e.target.id == "add") {
    bar.addClick(e.target);
  }
  if (e.target.matches(".checkbox")) {
    bar.checkboxClick(e.target);
  }
  if (e.target.matches(".arrow")) {
    bar.checkboxClick(e.target);
  }
};
