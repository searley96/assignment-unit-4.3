console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}

//checks to see if true works -- 
console.log('should return true:', addItem('apples'));
// checks to see if item added to array -- 
console.log('should add apples:', basket);

console.log('should return true:', addItem('bananas'));
console.log('should add bananas', basket);

console.log('should return true:', addItem('spinach'));
console.log('should add spinach:', basket);

function listItems() {
    for (item of basket) {
        console.log(item);
    }
}

// checks to see if array items print on each line
console.log(listItems(basket));


function empty() {
    return basket.splice();
}

console.log('should reutrn empty', empty(basket));

const maxItems = 5

function isFull(basket) {
    if (basket < maxItems) {
        return false;
    } else {
        return true;
    }
}
console.log('should return false:', isFull(1));

addItem