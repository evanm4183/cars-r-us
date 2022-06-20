import { getPaints } from "./database.js"

const paints = getPaints()

export const paintsDropdownMenu = () => {
    let HTML = `<select id="paints"><option value="0">Select a paint color...</option>`

    for (const paint of paints) {
        HTML += `<option value="${paint.id}">${paint.color}</option>`
    }

    HTML += `</select>`

    return HTML
}