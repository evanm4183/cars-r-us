const database = {
    paints: [
        {id: 1, color: "Silver", price: 100},
        {id: 2, color: "Midnight Blue", price: 200},
        {id: 3, color: "Firebrick Red", price: 300},
        {id: 4, color: "Spring Green", price: 400}
    ],
    interiors: [
        {id: 1, type: "Beige Fabric", price: 1000},
        {id: 2, type: "Charcoal Fabric", price: 2000},
        {id: 3, type: "White Leather", price: 3000},
        {id: 4, type: "Black Leather", price: 4000}
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

let orderInProgress = {}

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

export const addOrder = () => {
    let lastId
    const ordersLength = database.orders.length

    if (ordersLength === 0) {
        lastId = 0
    } else {
        lastId = database.orders[ordersLength - 1].id
    }

    orderInProgress.id = lastId + 1
    database.orders.push(orderInProgress)
    orderInProgress = {}
}

