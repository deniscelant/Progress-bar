import * as db from "/db.js"

const hub = document.getElementById("hub")
const createBarButton = document.getElementById("createBar")

class panelBar {
    constructor() {
    }
    createBar(name) {
        
           this.renderBar(name);
    }

    progressBar(element) {
        let total = 100
        let qtd = 10
        let doneModule = 3
        let some = (total * doneModule / qtd)
        some = Math.trunc(some);
        element.style.width = `${some}%`
        console.log(element)
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

        this.progressBar(progress);
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


