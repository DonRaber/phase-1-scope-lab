var customerName = 'bob'
const leastFavoriteCustomer = "joe"

function upperCaseCustomerName() {
    customerName = 'BOB'
    return customerName
}

function setBestCustomer() {
    bestCustomer = `not bob`
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`
    return bestCustomer
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}