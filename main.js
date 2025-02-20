import * as db from "/db.js"

const hub = document.getElementById("hub")
const createBarButton = document.getElementById("createBar")

class panelBar {
    constructor() {
    }
    createBar(name) {
        let barInfo = {

        }
    //    this.renderBar(name);
    }

    progress(){
        let fr = 1;
        let total = 100;
        let module = fr;
    }

    renderBar(name){
        const barPanel = document.createElement("div");
        const bar = document.createElement("div");
        const progress = document.createElement("div")
        const text = document.createElement("h3")
        const percent = document.createElement("p")
        const arrowDown = document.createElement("p")

        barPanel.classList.add("barPanel")
        bar.id = "bar"
        progress.id = "progress"
        text.id = "text"
        percent.id = "percent"
        arrowDown.id = "arrowDown"

        barPanel.appendChild(bar);
        bar.appendChild(progress);
        progress.appendChild(text);
        progress.appendChild(percent);
        progress.appendChild(arrowDown);

        hub.appendChild(barPanel);

        text.textContent = name;
        percent.textContent = "0%";
        arrowDown.textContent = "↓";
    }

    createTodo() {
      
    }


    clickEvent(parent, child, firstClass, secondClass) {
        parent.onclick = () => {

            child.classList.toggle(firstClass);
            child.classList.toggle(secondClass);

        }
    }
}

const panel = new panelBar();
panel.createBar("Front end 2026");


let total;
let module = 5

let doneModule = 2
let percent = total % doneModule

console.log(module/doneModule)