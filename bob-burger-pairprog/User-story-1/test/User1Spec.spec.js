const { assertEquals } = require("./testing-framework.js");
const Basket = require("../src/Basket.js");




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



actual = (basket.basketItems).length()




//assert
result = assertEquals(actual, expected)