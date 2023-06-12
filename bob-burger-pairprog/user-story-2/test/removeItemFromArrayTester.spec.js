//this is where the test is written to then be executed elsewhere

//Test 1

console.log("Test 1 - checks length of array to ensure it goes down by 1")

//Arrange
input = []    // shopping basket array
expected = []    // shopping basket with last item removed 


//Act


actual = removeLastItem(input)



//Assert 
result = assertEquals(actual, expected)