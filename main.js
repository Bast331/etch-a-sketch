// declare Variables
let numberCellsInARow;
let numberCellsInCanvas;
let loopIterationNumber;
let screenwidth;
let canvasWidth;
let cellWidth;
let backgroundColorForCells = "white";
let divContainer;

// Know if User is on Smartphone to make click instead of Hover Event
var UserAgent = navigator.userAgent.toLowerCase();


// querySelectors for Buttons - color and eraser
const sketchBlack = document.querySelector('.Sketch');
sketchBlack.addEventListener('click', () => {
   backgroundColorForCells = "black";
})

const eraseCells = document.querySelector('.Eraser');
eraseCells.addEventListener('click', () => {
    backgroundColorForCells = "white";
})

const sketchBlue = document.querySelector('.Blue');
sketchBlue.addEventListener('click', () => {
    backgroundColorForCells = "cyan";
})


// Declare how many cells in a row from user (default 16)
    const showNumberSlider = document.querySelector('.cellsValueDisplay');
    const cellsSizeSlider = document.getElementById('cellsSizeSlider');
    showNumberSlider.textContent = `${cellsSizeSlider.value}`
    
    cellsSizeSlider.addEventListener('change', ()=> {
        showNumberSlider.textContent = `${cellsSizeSlider.value}`
        numberCellsInARow = cellsSizeSlider.value;
        removeGrid()
        makeGrid()
    })



// loop that creates the right amount of cells 
// and appends to container 
// and hover or click
function makeGrid() {

// Create QuerySelector Body to append Elements
const body = document.querySelector('.body');

// Create Container that appends on body
divContainer = document.createElement('div');

// Give created Elements a Classname to style in css
divContainer.classList.add('Container');

// Append the element
body.appendChild(divContainer);


// width of screen -> width of canvas
if(screen.width >= 1024) {
    divContainer.style.width = 800 + "px";
    
    canvasWidth = 800;
    console.log(canvasWidth);
}  
else {
    divContainer.style.width = 400 + "px"; 
    canvasWidth = 400;
    console.log(canvasWidth);

    

}

numberCellsInARow = cellsSizeSlider.value;
    // How many Cells in Canvas
    numberCellsInCanvas = numberCellsInARow*numberCellsInARow;
    console.log(numberCellsInCanvas);

for(loopIterationNumber = 0; loopIterationNumber < numberCellsInCanvas; loopIterationNumber++) {
    // create divs and append on Container
    const div = document.createElement('div');
    div.classList.add('Div');
    divContainer.appendChild(div);

    
    // declare width of cells
    cellWidth = canvasWidth / numberCellsInARow;
    div.style.width = cellWidth - 0.01 + "px";
    div.style.height = cellWidth - 0.01 + "px";
    console.log(cellWidth);

    
        
    // Smartphone or PC -> click or hover
        // User-Agent: if smartphone: click
        if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
            
            div.addEventListener('click', () => {
                div.style.backgroundColor = backgroundColorForCells;
            });
        }
        // else PC: hover
        else {
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = backgroundColorForCells;
            });
        }
    

    // Clear Button
    const clearCanvas = document.querySelector(".Clear");

    clearCanvas.addEventListener('click', () => {
        div.style.backgroundColor = "white";
    }); 

}
}

function removeGrid() {
    const Cells = document.getElementsByClassName('.div');
    divContainer.remove(Cells);
}
makeGrid();