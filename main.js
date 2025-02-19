import * as db from "/db.js"

class panelBar {
    constructor() {
    }
    createBar(name) {
        const panel = document.createElement("div");

        panel.classList.add("barPanel");
        panel.id = "panelId"
        const teste = document.getElementById("teste")

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
        // const arrowDown = document.querySelector("#arrowDown");
        // this.clickEvent(arrowDown, "openbarPanel", "barPanel")
    }

    createTodo() {
        const modulesHub = document.createElement("div");
        modulesHub.id = "modulesHub"
        modulesHub.classList.add("modulesHubHidden")
        const panel = document.getElementById("panelId");
        panel.appendChild(modulesHub);

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

    moduleClickEvent(parent, child, firstClass, secondClass) {
        parent.onclick = () => {

                child.classList.toggle(firstClass);
                child.classList.toggle(secondClass);

        }
    }

    // todoButton() {
    //     const todoButton = document.createElement("button")

    // }
}



let moduleUnit = "100px"

const newbarPanel = new panelBar()

newbarPanel.createBar("Freelance");
newbarPanel.createTodo();

const panelE = document.getElementById("panelId");
const modulesHubE = document.getElementById("modulesHub");

newbarPanel.moduleClickEvent(panelE, typeInput, "modulesHubShow", "modulesHubHidden")


