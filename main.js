import * as db from "/db.js"

class panelBar {
    constructor() {
    }
    createBar(name) {
        const panel = document.createElement("div");

        panel.classList.add("barPanel");
        panel.id = "panelId"
        teste.appendChild(panel)

        panel.innerHTML = `
        <div id="bar">
            <div id="progress">
                <h3 id="project">${name}</h3>
                <p id="percent">0%</p>
                <p id="arrowDown">↓</p>
            </div>
        </div>
    `

        const modulesID = document.createElement("div");
        modulesID.classList.add("modulesHubHidden")
        modulesID.id = "modulesId"
        panel.appendChild(modulesID)

        
        const panelId = document.getElementById("panelId")
        this.clickEvent(panelId, "openbarPanel", "barPanel")
        this.clickEvent(modulesID, "modulesHubShow", "modulesHubHidden")
    }

    createTodo() {
        const modulesHub = document.getElementsByClassName("modulesHubHidden");

        modulesHub.innerHTML = `
            <div id="inputArea">
               <input id="check" type="checkbox"><input id="typeInput" type="text" placeholder="Digite aqui..."></input>
           </div>
           `;

    }

    clickEvent(element, firstClass, secondClass) {
        element.onclick = () => {

            element.classList.toggle(firstClass);
            element.classList.toggle(secondClass);

        }
    }

    todoButton() {
        const todoButton = document.createElement("button")

    }


}

let moduleUnit = "100px"
const teste = document.getElementById("teste")

const newbarPanel = new panelBar()

newbarPanel.createBar("Freelance");
newbarPanel.createTodo();



