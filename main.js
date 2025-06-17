class Bar {
  constructor() {
    this.barDiv;
    this.modules = {
      marked: [],
      unMarked: [],
    };
    this.Render();
    this.Events();
    this.tittle = "MyBar";

  }

  Progress(container, progress, percent) {
    const checkboxes = container.querySelectorAll(".checkbox");
    const total = checkboxes.length;
    const marked = [...checkboxes].filter((cb) => cb.checked).length;

    const percentage = total === 0 ? 0 : Math.round((marked / total) * 100);
    progress.style.width = `${percentage}%`;
    percent.textContent = `${percentage}%`;
  }

  Render() {
    this.barDiv = document.createElement("div");
    document.body.appendChild(this.barDiv);
    this.barDiv.innerHTML = `
    <div class="barPanel">
        <div id="bar" class="bars">

            <div id="progress" class="progress"></div>
            
            <div id="progressInfo">
              <input id="text" type="text">${this.tittle}</input>
              <p id="percent"></p>
              <p id="arrow" class="arrow">↓</p>
            </div>
            
        </div>
            <div id="modulesHub">
              <p id="add" class="add">+</p>
            </div> 
    </div>
    `;
  }

  RemoveBar() {
    this.barDiv.remove();
  }

  handleCheck(checkbox) {
    const parent = checkbox.closest(".bars");
    const progress = parent.querySelector("#progress");
    const percent = progress.querySelector("#percent");

    this.Progress(parent, progress, percent);
  }

  addModule(moduleHub) {
    const container = moduleHub.closest(".barPanel");
    const progress = container.querySelector("#progress");
    const percentParent = container.querySelector("#progressInfo");
    const percent = percentParent.querySelector("#percent");

    const module = document.createElement("div");
    moduleHub.appendChild(module);
    module.innerHTML = `
    <input class="checkbox" type="checkbox" autocomplete="off"/>
    <input id="typeInput" type="text" autocomplete="off" placeholder="Nome da tarefa"/>
  `;

    const checkbox = module.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
      this.Progress(container, progress, percent);
    });

    this.Progress(container, progress, percent); // atualiza ao adicionar
  }

  hideArrow(arrow) {
    const par2 = arrow.closest(".barPanel");
    const child = par2.querySelector("#modulesHub");
    if (arrow.textContent === "↓") {
      child.style.display = "none";
      arrow.textContent = "↑";
    } else if (arrow.textContent === "↑") {
      child.style.display = "initial";
      arrow.textContent = "↓";
    }
  }

  Events() {
    document.onclick = (e) => {
      if (e.target.id == "add") {
        this.addModule(e.target);
      }
      if (e.target.id == "checkbox") {
        this.handleCheck(e.target);
      }
      if (e.target.id == "arrow") {
        this.hideArrow(e.target);
      }
    };
  }

  StorageData(){
    const tittle = document.querySelector("#text")
    const storageTittle = localStorage.setItem("tittle", tittle.placeholder)
    this.tittle = localStorage.getItem("tittle");

  }
}

document.querySelector("#createBarButton").onclick = () => new Bar();
new Bar()
// Bar.Render()
