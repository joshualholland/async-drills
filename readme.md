* Async: Now and later
* JavaScript programs are executed in chunks. Chunks that execute now and others that will execute later. Let’s explore that concept.

* Create a function in app.js that will log a message to the console and return a number
* The value returned should be stored in a global variable
* Create another function that will log the result of multiplying the global variable multiplied by 4
* Create a setTimeout function that will call the second function you created after 2 seconds
Callbacks
* Create a function called getWords that will do the following:
* log a word
wait 3 seconds
* log another word
wait 2 second
* log a third word
wait 1 second
* log a fourth word
Before you call the function try to determine how the log statements will be printed in the console
* Call the getWords function
* Create a function called countdown that accepts two parameters: num and callback
* Create another function called done that will log a message to the console
* The countdown function should countdown from the number you passed it, delaying 1 second each time, and when it gets to 1 it should call the callback function
* Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function
Promises
* Create a global variable and set it equal to true or false
* Create a new promise named orderingChickenSandwich
* In the resolver function for the promise check if the global variable is true.
* If the global variable is true, create an object with two properties (key/value pair):
    sandwich : chicken
    veggies: lettuce
* Resolve the object
* If the global variable is false, create a variable and set it equal to a new Error. (hint)
* Reject this new variable
* Create a new function named orderFood that will call the promise you made and console log the result if the promise is fulfilled or if it is rejected
* Call the orderFood function and test each outcome
Chaining Promises
* Create a new promise that will resolve the number 1 after 2 seconds
* Then return the result multiplied by 2
* Then return the new result multiplied by 4
* Then return the new result multiplied by 6