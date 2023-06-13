// test area for user story 2

const { assertEquals } = require("./testing-framework.js");
const Basket = require("../src/Basket.js");


console.log(' ')
console.log('User Story 2 - Testing')
console.log('======================')
console.log(' ')

console.log(' ')
console.log('Test 1')
console.log('Check that item in basket has been removed')
console.log(' ')

let input, expected, actual, result



//arrange
const basket = new Basket();
basket.addItem('bagel')
basket.addItem('burger')
basket.addItem('bagel2')

expected = 2
//act


basket.removeItem('bagel2')
actual = basket.basketItems.length

//assert


// console.log(actual)
// console.log(expected)


result = assertEquals(actual, expected)
console.log(result)


console.log(' ')
console.log('Test 2')
console.log('Check that removeItem function only removes specific item')
console.log(' ')


//arrange
const basket1 = new Basket()

basket1.addItem('bagel')
basket1.addItem('burger')
basket1.addItem('bagel2')

expected = 3
//act

basket1.removeItem('bagel3')
actual = basket1.basketItems.length

// console.log(basket1.basketItems)

//assert

result = assertEquals(actual, expected)
console.log(result)