import * as db from "/db.js"

const hub = document.getElementById("hub")
const createBarButton = document.getElementById("createBar")

class panelBar {
    constructor() {
    }
    createBar(name) {
        
           this.renderBar(name);
    }

    progressBar(bar, percent) {
        let total = 100
        let qtd = 10
        let doneModule = 5
        let some = (total * doneModule / qtd)
        some = Math.trunc(some);
        bar.style.width = `${some}%`
        percent.textContent = `${some}%`
        console.log(bar)
    }

    user(name, bars){
        name = name
        bars = bars

    }

    renderBar(name) {
        const barPanel = document.createElement("div");
        const bar = document.createElement("div");
        const progress = document.createElement("div")
        const text = document.createElement("h3")
        const percent = document.createElement("p")
        const arrowDown = document.createElement("p")

        barPanel.classList.add("barPanel")
        barPanel.id = "barPanel"
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

        this.progressBar(progress, percent);
    }

    createTodo() {
        const inputArea = document.createElement("div");
        const checkBox = document.createElement("input");
        const typeInput = document.createElement("input");

        inputArea.id = "inputArea"
        checkBox.id = "check"
        typeInput.id = "typeInput"

        const barPanel = document.getElementById("barPanel")
        barPanel.appendChild(inputArea)
        inputArea.appendChild(checkBox)
        inputArea.appendChild(typeInput)

        checkBox.type = "checkbox"
        typeInput.type = "text"
        typeInput.placeholder = "Digite aqui..."
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
panel.createTodo();


