import * as db from "/db.js"

class barPanel{
    constructor(name){
        this.name = name;
    }
    createBar(name){

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
        `
    }
}

const teste = document.getElementById("teste")
const newbarPanel = new barPanel("Freelance")

newbarPanel.createBar("Freelance");
