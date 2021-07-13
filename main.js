// declare Variables
let numberCellsInARow = 16;
let numberCellsInCanvas;
let loopIterationNumber;
let screenwidth;
let canvasWidth;
let cellWidth;
// let div;

// Know if User is on Smartphone to make click instead of Hover Event
var UserAgent = navigator.userAgent.toLowerCase();


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

    // Append the elements
    body.appendChild(divContainer);


// loop that creates the right amount of cells 
// and appends to container 
// and set width of canvas and width of cells 
// and hover or click
for(loopIterationNumber = 0; loopIterationNumber < numberCellsInCanvas; loopIterationNumber++) {
    // create divs and append on Container
    let div = document.createElement('div');
    div.classList.add('Div');
    divContainer.appendChild(div);

    // width of screen -> width of canvas
        if(screen.width >= 1024) {
            divContainer.style.width = numberCellsInARow*2 + "rem";
            divContainer.style.cssText = 'grid-template-columns: 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem; grid-template-rows: 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem 2rem;'
            canvasWidth = 32;
        }  
        else {
            divContainer.style.width = numberCellsInARow + "rem"; 
            canvasWidth = 16;
        }  
    
    // declare width of cells
        cellWidth = canvasWidth / numberCellsInARow;
        div.style.width = cellWidth + "rem";
        div.style.height = cellWidth + "rem";
        console.log(cellWidth);

    // Smartphone or PC -> click or hover
        // User-Agent: if smartphone: click
        if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
            
            div.addEventListener('click', () => {
                div.style.backgroundColor = "cyan";
            });
        }
        // else PC: hover
        else {
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = "cyan";
            });
        }

        // Clear Button
const clearCanvas = document.querySelector(".Clear");

clearCanvas.addEventListener('click', () => {
    div.style.backgroundColor = "white";
}); 
}


