// Write your solution in this file!

var customerName = "bob";
const leastFavoriteCustomer = "Ryan";


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); 
    return customerName
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    const besCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "different customer";
}