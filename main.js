const hub = document.getElementById("hub");
let clicked = false;

class Bar {
  constructor() {}

  renderBar() {
    const barPanel = document.createElement("div");
    const bar = document.createElement("div");
    const progress = document.createElement("div");
    const text = document.createElement("input");
    const percent = document.createElement("p");
    const arrowDown = document.createElement("p");

    barPanel.classList.add("barPanel");
    barPanel.id = "barPanel";
    bar.id = "bar";
    progress.id = "progress";
    text.id = "text";
    percent.id = "percent";
    arrowDown.id = "arrowDown";

    barPanel.appendChild(bar);
    bar.appendChild(progress);
    progress.appendChild(text);
    progress.appendChild(percent);
    progress.appendChild(arrowDown);

    hub.appendChild(barPanel);

    text.placeholder = "My bar";
    text.type = "text";
    percent.textContent = "0%";
    arrowDown.textContent = "↓";

    const eventBar = new EventManager();
    eventBar.clickEvent(arrowDown)
    // this.toogleClickEvent(arrowDown, modulesHub, "show", "hidden");
  }

  renderTodoHub() {
    const modulesHub = document.createElement("div");
    const barPanel = document.getElementById("barPanel");

    modulesHub.id = "hidden";
    modulesHub.classList.add("modulesHub");

    const add = document.createElement("p");
    add.id = "add";
    add.textContent = "+";

    modulesHub.appendChild(add);
    barPanel.appendChild(modulesHub);
  }

  renderCheckBox() {
    const inputArea = document.createElement("div");
    const checkBox = document.createElement("input");
    const typeInput = document.createElement("input");

    inputArea.id = "inputArea";
    checkBox.id = "checkBox";
    typeInput.id = "typeInput";

    const modulesHub = document.getElementsByClassName("modulesHub");
    Array.from(modulesHub).forEach((e) => {
      e.appendChild(inputArea);
    });

    inputArea.appendChild(checkBox);
    inputArea.appendChild(typeInput);

    checkBox.type = "checkbox";
    typeInput.type = "text";
    typeInput.placeholder = "Digite aqui...";
  }

  addModule() {
    let modules = [];
    let check;

    modules.push(check);
  }

  markModule() {
    let done_modules = [];
    let mark_check;

    done_modules.push(mark_check);
  }
}

class Progress {
  calcProgress(modules, done_modules) {
    let total = 100;
    let active = modules.length;
    let done = done_modules.length;
    let some = (total * done) / active;
    some = Math.trunc(some);
  }

  changeProgress(some, progress, percent) {
    progress.style.width = `${some}%`;
    percent.textContent = `${some}%`;
  }
}

class EventManager {
  constructor(method) {
    this.method = method;
    // this.selector = selector;
  }

  clickBar(selector) {
    const barElement = document.querySelector(selector);
    barElement.addEventListener("click", () => this.method.renderBar());
  

  }

  // clickToRenderTodoHub() {
  //   const intTodo = setInterval(() =>{
  //     const arrowElement = document.querySelectorAll("p");

  //     arrowElement.forEach((element) => {
  //       element.addEventListener('click', () => {
  //         if(element.id == "arrowDown"){
  //           this.method.renderTodoHub();
  //           clearInterval(intTodo)

  //         } else{
  //           console.log("erro")
  //         }
  //       });
  //     });
  //   }, 1000)

  //   }

  toogleStyle(selector) {

      const p = document.querySelectorAll("p")
      // const search = p.forEach(e => {

      //   e.find((e) => e === "arrowDown")
      // })
      const pArr = Array.from(p);
      const search = pArr.find((e) => e === "arrowDown")

      if(search){

        selector.onclick = (event) =>{
            // let text = event.currentTarget.id;
            const barPanel = document.getElementById("barPanel")
            barPanel.classList.toggle("openBarPanel")
            barPanel.classList.toggle("barPanel")
        }
      } else{
        console.log("erro");
        
      }



  }

  clickEvent(selector){
    selector.onclick = () =>{clicked = true;}
  }
}

const bar = new Bar();
const eventBar = new EventManager(bar);
eventBar.clickBar("#createBarButton");

if(document.querySelector("#arrowDown")){

  const arrowDown = document.querySelector("#arrowDown")
  arrowDown.onclick = eventM.toogleStyle(arrowDown);
} else if(clicked){
    const arrowDown = document.querySelector("#arrowDown")
    arrowDown.onclick = eventBar.toogleStyle(arrowDown);

} else{
  console.log("Erro")
}
