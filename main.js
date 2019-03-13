/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
    let inputNumber = parseInt(document.querySelector('#list-number').value);

    console.log(inputNumber);

    // Append the number to our array.
    if (inputNumber.length != 0) { // your if statement with length === 0 condition 
        numbers.push(inputNumber)  // adding word typed to the array
      }
    
      

    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.

    // Update our html.

      updateUL();
}

// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    let index = parseInt(document.querySelector('#list-number').value);

    // Remove the number at that index from the list.
     if (index != NaN) {
        numbers.splice(index,1);

     }
    
       /* ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    // Update our html.
     updateUL();


}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.
    numbers = []; 


    // Update our html.
     updateUL() ;
    
}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToAdd = parseInt(document.querySelector('#numberForMath').value);
    
    // Add value to everything on the list.
    for (i = 0; i < numbers.length; i++ ) {
        numbers[i] = numbers[i] + numberToAdd;
    }  
    // Update our html.
    updateUL();
    resetInput();
    
}
function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToSubtract = parseInt(document.querySelector('#numberForMath').value);
    
    // Sub value to everything on the list.
    for (i = 0; i < numbers.length; i++ ) {
        numbers[i] = numberToSubtract - numbers[i];
    }  
    // Update our html.
    updateUL();
    resetInput();
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToMultiply = parseInt(document.querySelector('#numberForMath').value);
    
    // multiply value to everything on the list.
    for (i = 0; i < numbers.length; i++ ) {
        numbers[i] = numberToMultiply  * numbers[i];
    }  
    // Update our html.
    updateUL();
    resetInput();
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToDivide = parseInt(document.querySelector('#numberForMath').value);

    // Divide value from everything on the list.
    for (i = 0; i < numbers.length; i++ ) {
        numbers[i] = numberToDivide  / numbers[i];
    }  
    // Update our html.
    updateUL();
    resetInput();
    
}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#number-list');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const UL = document.querySelector('#number-list'); //location where to print
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    UL.appendChild(newLI);
}

// clearing input box
function resetInput() {
document.querySelector('#number-list').value = '' ;
document.querySelector('#numberForMath').value = '' ;
}