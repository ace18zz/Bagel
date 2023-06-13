const { assertEquals } = require("./testing-framework.js");
const Basket = require("../src/Basket.js");

console.log('User Story 1 - Testing')
console.log('======================')
console.log(' ')
console.log('Test 1')
console.log('Check that number of items in basket has increased by 1')
console.log(' ')


let input, expected, actual, result


//arrange
const basket = new Basket();

//basket.addItem('bagel')

expected = 1



//act
basket.addItem('bagel')

actual = basket.basketItems.length


//assert
result = assertEquals(actual, expected)

console.log(result)
console.log('  ')




console.log('Test 2')
console.log('Basket should only accept string as an input')
console.log(' ')






//arrange
const intbasket = new Basket();

intbasket.addItem('    ')
//intbasket.addItem()

expected = 0



//act
//basket.addItem('bagel')

actual = intbasket.basketItems.length


//assert
result = assertEquals(actual, expected)

console.log(result)