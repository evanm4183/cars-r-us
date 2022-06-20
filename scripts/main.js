import { renderAllHTML } from "./renderHTML.js";

document.addEventListener("orderSubmitted", event => {
    mainElement.innerHTML = renderAllHTML()
})

const mainElement = document.querySelector("#container")
mainElement.innerHTML = renderAllHTML()