const database = {
    paints: [
        {id: 1, color: "Silver", price: 100},
        {id: 2, color: "Midnight Blue", price: 200},
        {id: 3, color: "Firebrick Red", price: 300},
        {id: 4, color: "Spring Green", price: 400}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric", price: 1000},
        {id: 2, material: "Charcoal Fabric", price: 2000},
        {id: 3, material: "White Leather", price: 3000},
        {id: 4, material: "Black Leather", price: 4000}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 5000},
        {id: 2, package: "Navigation Package", price: 6000},
        {id: 3, package: "Visibility Package", price: 7000},
        {id: 4, package: "Ultra Package", price: 8000}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 500},
        {id: 2, type: "17-inch Pair Radial Black", price: 600},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 700},
        {id: 4, type: "18-inch Pair Spoke Black", price: 800}
    ],
    orders: []
}

export let orderInProgress = {}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const setOrderProperty = (propertyName, value) => {
    orderInProgress[propertyName] = value
}

export const submitOrder = () => {
    let lastId
    const ordersLength = database.orders.length

    if (ordersLength === 0) {
        lastId = 0
    } else {
        lastId = database.orders[ordersLength - 1].id
    }

    orderInProgress.id = lastId + 1
    orderInProgress.timestamp = Date.now()
    database.orders.push(orderInProgress)

    orderInProgress = {}
}

export const getTotalPrice = (order) => {
    const [paintObj] = database.paints.filter(paint => paint.id === order.paintId)
    const [interiorObj] = database.interiors.filter(interior => interior.id === order.interiorId)
    const [technologyObj] = database.technologies.filter(technology => technology.id === order.technologyId)
    const [wheelObj] = database.wheels.filter(wheel => wheel.id === order.wheelId)

    return paintObj.price + interiorObj.price + technologyObj.price + wheelObj.price
}

export const getPrintableOrder = (order) => {
    let printableObj = {}

    const [paintObj] = database.paints.filter(paint => paint.id === order.paintId)
    const [interiorObj] = database.interiors.filter(interior => interior.id === order.interiorId)
    const [technologyObj] = database.technologies.filter(technology => technology.id === order.technologyId)
    const [wheelObj] = database.wheels.filter(wheel => wheel.id === order.wheelId)

    printableObj.paint = paintObj.color
    printableObj.interior = interiorObj.material
    printableObj.technology = technologyObj.package
    printableObj.wheels = wheelObj.type

    return printableObj
}