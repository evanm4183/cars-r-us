import { getWheels, setOrderProperty } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.id === "wheels") {
        const optionValue = parseInt(event.target.value) 
        setOrderProperty("wheelId", optionValue)
    }
})

const wheels = getWheels()

export const wheelsDropdownMenu = () => {
    let HTML = `<select id="wheels"><option value="0">Select an wheel type...</option>`

    for (const wheel of wheels) {
        HTML += `<option value="${wheel.id}">${wheel.type}</option>`
    }

    HTML += `</select>`

    return HTML
}