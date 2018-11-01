// Async now and later
let someNumber;
function getNumber() {
    console.log('I returned a number');
    return someNumber = 4;
};
getNumber();

function multiplyNumber() {
    console.log(someNumber * 4)
};
multiplyNumber();

setTimeout(() => {
    multiplyNumber();
}, 2000);
// Callbacks
function getWords() {
    console.log('Is');
    setTimeout(function () {
        console.log('This')
    }, 3000);
    setTimeout(function () {
        console.log('In')
    }, 2000);
    setTimeout(function () {
        console.log('Order?')
    }, 1000);
};
// Logs 1st word, 4th word, 3rd word, 2nd word
getWords();
// countdown function
function countDown(num, callback) {
    setTimeout(counter, 1000);
    function counter() {
        num = num - 1;
        console.log(`num is ${num}`);
        if (num > 0) {
            console.log(`do countdown again`);
            countDown(num, done);
        } else {
            callback();
            return;
        }
    };
};
function done() {
    console.log('done')
};
countDown(5, done);
// Promises
let hungry = true;
let orderingChickenSandwich = new Promise(function (resolve, reject) {
    if (hungry === true) {
        let snack = {
            sandwich: 'chicken',
            vegetables: 'Lettuce'
        };
        resolve(snack);
    } else {
        let err = new Error('Not hungry?');
        reject(err);
    }
}).then(function (result) {
    console.log('fulfilled');
    console.log(result)
}).catch(function (error) {
    console.log(error)
});

function orderFood() {
    return orderingChickenSandwich;
};
// chaining promises
let multiplyNumbers = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 2000)
}).then((result) => {
    console.log(result);
    return resultA = result * 2;
}).then((resultA) => {
    console.log(resultA);
    return resultB = resultA * 4
}).then((resultB) => {
    console.log(resultB);
    return resultC = resultB *6
}).then((resultC) => {
    console.log(resultC)
});
