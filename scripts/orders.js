import { getOrders, getTotalPrice, getPrintableOrder, submitOrder } from "./database.js"
import { renderAllHTML } from "./renderHTML.js"

document.addEventListener("click", event => {
    if (event.target.id === "order-button") {
        submitOrder()
        document.dispatchEvent(new CustomEvent("orderSubmitted"))
    }
})

export const ordersHTML = () => {
    let printableOrder
    let html = ""
    const orders = getOrders()

    for (const order of orders) {
        printableOrder = getPrintableOrder(order)
        html += `<section class="custom-order">${printableOrder.paint} car with ${printableOrder.wheels} wheels, 
                ${printableOrder.interior}, and the ${printableOrder.technology} for a total cost of 
                ${getTotalPrice(order)}</section>`
    }

    return html
}