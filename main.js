// declare Variables
let numberCellsInARow = 16;
let numberCellsInCanvas;
let loopIterationNumber;

// Declare how many cells in a row from user (default 16*16)


// How many Cells in Canvas
numberCellsInCanvas = numberCellsInARow*numberCellsInARow;
console.log(numberCellsInCanvas);

// Create QuerySelector Body to append Elements
const body = document.querySelector('.body');

// Create Container that appends on body
const divContainer = document.createElement('div');

// Give created Elements a Classname to style in css
divContainer.classList.add('Container');

// give Container the right width
divContainer.style.width = numberCellsInARow + "rem";  

// Append the elements
body.appendChild(divContainer);




// loop that creates the right amount of cells and appens to container
for(loopIterationNumber = 0; loopIterationNumber < numberCellsInCanvas; loopIterationNumber++) {
    var div = document.createElement('div');
    div.classList.add('Div');
    divContainer.appendChild(div);
}



// resize canvas if a specific device width (media query) is reached


