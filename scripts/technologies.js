import { getTechnologies, setOrderProperty } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.id === "technologies") {
        const optionValue = parseInt(event.target.value) 
        setOrderProperty("technologyId", optionValue)
    }
})

const technologies = getTechnologies()

export const technologiesDropdownMenu = () => {
    let html = `<select id="technologies"><option value="0">Select a technology package...</option>`

    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.package}</option>`
    }

    html += `</select>`

    return html
}