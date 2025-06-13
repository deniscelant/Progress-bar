class Bar {
  constructor() {
    this.barDiv;
    this.tittle = "Minha barra de progresso";
    this.modules = {
      marked: [],
      unMarked: [],
    };
    this.Render();
    this.Events();
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
            <div id="progress" class="progress">
                <input
                id="text"
                type="text"
                placeholder=${this.tittle}></input>
                <p id="percent" class="progress"></p>
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
    const parent = checkbox.closest(".bars");
    const progress = parent.querySelector("#progress");
    const percent = progress.querySelector("#percent");

    this.Progress(parent, progress, percent);
  }

  addModule(moduleHub) {
    const container = moduleHub.closest(".bars");
    const progress = container.querySelector("#progress");
    const percent = progress.querySelector("#percent");

    const module = document.createElement("div");
    moduleHub.appendChild(module);
    module.innerHTML = `
    <input class="checkbox" type="checkbox"/>
    <input id="typeInput" type="text" placeholder="Nome da tarefa"/>
  `;

    const checkbox = module.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
      this.Progress(container, progress, percent);
    });

    this.Progress(container, progress, percent); // atualiza ao adicionar
  }

  hideArrow(arrow) {
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
}

document.querySelector("#createBarButton").onclick = () => new Bar();
// Bar.Render()
