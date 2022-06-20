import { interiorsDropdownMenu } from "./interiors.js"
import { paintsDropdownMenu } from "./paints.js"
import { technologiesDropdownMenu } from "./technologies.js"
import { wheelsDropdownMenu } from "./wheels.js"
import { ordersHTML } from "./orders.js"

export const renderAllHTML = () => {
    return `
    <article class="boxes">
        <section class="selection-box">
            <h2 class="selection-title">Paints</h2>
            ${paintsDropdownMenu()}
        </section>
        <section class="selection-box">
            <h2 class="selection-title">Interior</h2>
            ${interiorsDropdownMenu()}
        </section>
        <section class="selection-box">
            <h2 class="selection-title">Wheels</h2>
            ${wheelsDropdownMenu()}
        </section>
        <section class="selection-box">
            <h2 class="selection-title">Technologies</h2>
            ${technologiesDropdownMenu()}
        </section>
    </article>
    <button id="order-button">Place Car Order</button>
    <article class="custom-car-orders">
        <h2 class="custom-car-orders-title">Custom Car Orders</h2>
        ${ordersHTML()}
    </article>
    `
}