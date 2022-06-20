import { getTechnologies } from "./database.js"

const technologies = getTechnologies()

export const technologiesDropdownMenu = () => {
    let HTML = `<select id="technologies"><option value="0">Select a technology package...</option>`

    for (const technology of technologies) {
        HTML += `<option value="${technology.id}">${technology.package}</option>`
    }

    HTML += `</select>`

    return HTML
}