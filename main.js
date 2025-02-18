import * as db from "/db.js"

class barPanel {
    constructor(name) {
        this.name = name;
    }
    createBar(name) {

        const panel = document.createElement("div");
        panel.classList.add("barPanel");
        teste.appendChild(panel)
        panel.innerHTML = `
            <div id="bar">
                <div id="progress">
                    <h3 id="project">${name}</h3>
                    <p id="percent">0%</p>
                    <p id="arrowDown">↓</p>
                </div>
            </div>
                <div class="modulesHub"></div>
        `
    }
}

class modules {
    constructor(name) {
        this.name = name;
    }

    createTodo() {
        const modulesHub = document.getElementsByClassName("modulesHub");
        Array.from(modulesHub).forEach(e => e.innerHTML = `
            <div id="inputArea">
               <input id="check" type="checkbox"><input id="typeInput" type="text" placeholder="Digite aqui..."></input>
           </div>
           `) 
        // const check = document.getElementById("check");
        // const typeInput = document.getElementById("typeInput");
    }
}

let moduleUnit = "100px"
const teste = document.getElementById("teste")

const newbarPanel = new barPanel("Freelance")
const newmodules = new modules();

newbarPanel.createBar("Freelance");
newmodules.createTodo();

// barPanel.onclick = () =>{
//     barPanel.classList.
// }