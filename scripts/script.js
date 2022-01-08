const WIDTH = 550

const container = document.querySelector(".grid-container");
const box = document.createElement("div");
const resetbutton = document.querySelector("#reset-button");
const sizeButtonOne = document.querySelector("#size-10");
const sizeButtonTwo = document.querySelector("#size-16");
const sizeButtonThree = document.querySelector("#size-20");
const sizeButtonFour = document.querySelector("#size-32");
const slider = document.querySelector("#sizeSlider");
const sideValues = document.querySelector(".sideValues");

sideValues.textContent = `${slider.value} x ${slider.value}`;

slider.onchange = () => {
    sideValues.textContent = `${slider.value} x ${slider.value}`;
    newGrid(slider.value)
}
let oldGridSize = 16; 

function makeGridBox (gridSize) {
    
    container.style.cssText = (`grid-template-columns: repeat(${gridSize}, ${WIDTH/gridSize}px);
                                grid-template-rows: repeat(${gridSize}, ${WIDTH/gridSize}px);
                                width: ${WIDTH}px`);

    for (let i = 1; i <= (gridSize * gridSize); i++) {
        const box = document.createElement("div");
        box.classList.add("grid-box");
        box.style.cssText = (`width: ${WIDTH/gridSize}px; height: ${WIDTH/gridSize}px;`)
        container.appendChild(box);

        box.addEventListener("mousedown", () => {
            box.classList.add("box-colored");
        })

        box.addEventListener("mouseenter", (e) => {
            if (e.buttons > 0) {
                box.classList.add("box-colored");
            }
        })
    }

};

function newGrid (gridSize) {
    oldGridSize = gridSize;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    makeGridBox(gridSize);
};


resetbutton.addEventListener("click", () => {
    newGrid(oldGridSize);
});

sizeButtonOne.addEventListener("click", () => {
    slider.value = 10
    sideValues.textContent = "10 x 10";
    newGrid(10);
});

sizeButtonTwo.addEventListener("click", () => {
    slider.value = 16
    sideValues.textContent = "16 x 16";
    newGrid(16);
});

sizeButtonThree.addEventListener("click", () => {
    slider.value = 20
    sideValues.textContent = "20 x 20";
    newGrid(20);
});

sizeButtonFour.addEventListener("click", () => {
    slider.value = 32
    sideValues.textContent = "32 x 32";
    newGrid(32);
});

makeGridBox(16);