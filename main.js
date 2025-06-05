class Bar {
  constructor() {
    this.barDiv;
    this.tittle = "Minha barra de progresso";
    this.percent = 0;
    this.modules = {
      
      marked: [],
      unMarked: [],
    }
    this.progress;
    this.Render();
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

  static checkboxClick(checkbox) {
    if (checkbox.checked) {
      this.unMarked.push(1);
      this.active.pop();
    }
    if (!checkbox.checked) {
      this.active.push(1);
      this.unMarked.pop();
    }
  }

  static addClick() {
    this.modules.unMarked.push(1);
    const module = document.createElement("div");
    const modulesHub = document.querySelector("#modulesHub");
    modulesHub.appendChild(module);
    module.innerHTML = `
        <input id="checkbox" class="checkbox" type="checkbox"/>
        <input id="moduleText" type="checkbox"
        placeholder="Nome da tarefa"/>
      `;
  }

  static arrowClick(arrow) {
    if (arrow.textContent == "↓") {
      this.modulesHub.style.display = "initial";
      arrow.textContent = "↑";
    }
    if (arrow.textContent == "↑") {
      this.modulesHub.style.display = "none";
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

document.querySelector("#createBarButton").onclick = () => new Bar();

document.onclick = (e) => {
  if (e.target.matches(".add")) {
    Bar.addClick();
  }
  if (e.target.matches(".checkbox")) {
    const chk = e.currentTarget;
    Bar.checkboxClick(chk);
  }
  if (e.target.matches(".arrow")) {
    const arw = e.currentTarget;
    Bar.checkboxClick(arw);
  }
};
