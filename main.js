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




// Declare how many cells in a row from slider (default 16)
    const showNumberSlider = document.querySelector('.cellsValueDisplay');
    const cellsSizeSlider = document.getElementById('cellsSizeSlider');
    showNumberSlider.textContent = `${cellsSizeSlider.value}`
    
// if changing the slider show number in slider; remove grid (so not two grid have to be in the same place); function make grid with new number of cells;
    cellsSizeSlider.addEventListener('change', ()=> {
        showNumberSlider.textContent = `${cellsSizeSlider.value}`
        numberCellsInARow = cellsSizeSlider.value;
        removeGrid()
        makeGrid()
        // make backgroundColor white so you have to choose new color by pressing button
        backgroundColorForCells = "white";
    })



// function that creates grid 
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
    else if (screen.width >= 600) {
        divContainer.style.width = 400 + "px"; 
        canvasWidth = 400;
        console.log(canvasWidth);
    }
    else if (screen.width >= 425) {
        divContainer.style.width = 300 + "px"; 
        canvasWidth = 300;
        console.log(canvasWidth);
    }
    else {
        divContainer.style.width = 200 + "px"; 
        canvasWidth = 200;
        console.log(canvasWidth);
    }

    // the value of slider describes how many cells are in one row: if not changed now number from value is used
    numberCellsInARow = cellsSizeSlider.value;

        // How many Cells in Canvas
        numberCellsInCanvas = numberCellsInARow*numberCellsInARow;
        console.log(numberCellsInCanvas);


    // loop that creates amount of Cells in Canvas
    for(loopIterationNumber = 0; loopIterationNumber < numberCellsInCanvas; loopIterationNumber++) {
        // create divs and append on Container
        const div = document.createElement('div');
        div.classList.add('Div');
        divContainer.appendChild(div);

        
        // declare width of cells (-0.1px so every cell is shown)
        cellWidth = canvasWidth / numberCellsInARow;
        div.style.width = cellWidth - 0.01 + "px";
        div.style.height = cellWidth - 0.01 + "px";
        console.log(cellWidth);

        
            
        // Smartphone or PC -> click or hover for every color
            // User-Agent: if smartphone: click
            if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
                // default white
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
        

         // Buttons - color and eraser
        const sketchBlack = document.querySelector('.Sketch');
        sketchBlack.addEventListener('click', () => {
            // User-Agent: if smartphone: click
            if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
            // color: black
                div.addEventListener('click', () => {
                    div.style.backgroundColor = backgroundColorForCells = "black";
                });
             
            }
            // else PC: hover
            else {
                div.addEventListener('mouseenter', () => {
                    div.style.backgroundColor = backgroundColorForCells = "black";
                });
            }
        })
 
        const eraseCells = document.querySelector('.Eraser');
        eraseCells.addEventListener('click', () => {
            // User-Agent: if smartphone: click
            if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
            // color: white to erase       
                div.addEventListener('click', () => {
                    div.style.backgroundColor = backgroundColorForCells = "white";
 
                });
            }
            // else PC: hover
            else {
                div.addEventListener('mouseenter', () => {
                    div.style.backgroundColor = backgroundColorForCells = "white";
                });
            }
        })
         
        const sketchBlue = document.querySelector('.Blue');
        sketchBlue.addEventListener('click', () => {
            // User-Agent: if smartphone: click
            if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
            // color: blue      
                div.addEventListener('click', () => {
                    div.style.backgroundColor = backgroundColorForCells = "cyan";
                });
            }
            // else PC: hover
            else {
                div.addEventListener('mouseenter', () => {
                    div.style.backgroundColor = backgroundColorForCells = "cyan";
                });
            }
        }) 

        const sketchRandom = document.querySelector('.Random');
        sketchRandom.addEventListener('click', () => {
          
            // User-Agent: if smartphone: click
            if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
            // color: random rgb color
                div.addEventListener('click', () => {
                    
                    let R = Math.floor(Math.random() * 256);
                    let G = Math.floor(Math.random() * 256);
                    let B = Math.floor(Math.random() * 256);
                    div.style.backgroundColor = backgroundColorForCells = 'rgb(' + R + ',' + G + ',' + B + ')';
                    console.log(`${R} + ${G} + ${B}`);
                });
            }
            // else PC: hover
            else {
                div.addEventListener('mouseenter', () => {
                    
                    let R = Math.floor(Math.random() * 256);
                    let G = Math.floor(Math.random() * 256);
                    let B = Math.floor(Math.random() * 256);
                    div.style.backgroundColor = backgroundColorForCells = 'rgb(' + R + ',' + G + ',' + B + ')';
                    console.log(`${R} / ${G} / ${B}`);
                });
            }
            
        })

        const sketchRed = document.querySelector('.Red');
        sketchRed.addEventListener('click', () => {
            // User-Agent: if smartphone: click

            if (UserAgent.search(/(iphone|ipod|opera mini|fennec|palm|blackberry|android|symbian|series60|webos|ipad|windows phone)/) > -1) {
                // color: from white to black + 10%
                    div.addEventListener('click', () => {
                        div.style.backgroundColor = backgroundColorForCells = "red";
                    });
                }
                // else PC: hover
                else {
                    div.addEventListener('mouseenter', () => {
                        div.style.backgroundColor = backgroundColorForCells = "red";
                    });
                }
        })
        

        // Clear Button: make canvas completely white
        const clearCanvas = document.querySelector(".Clear");

        clearCanvas.addEventListener('click', () => {
            div.style.backgroundColor = "white";
        }); 
}
}

// remove the grid when changing value on slider
function removeGrid() {
    const Cells = document.getElementsByClassName('.div');
    divContainer.remove(Cells);
}

// make a grid when loading the page
makeGrid()