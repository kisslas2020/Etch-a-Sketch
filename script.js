const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.setAttribute('id', 'clear');
clearButton.addEventListener('click', clear);
container.appendChild(clearButton);

var root = document.querySelector(':root');
let shade = 100;
let delta = 10;
let choice = 1;
const radio = document.querySelectorAll('input');
radio.forEach(r => r.onclick = () => {
    choice = document.querySelector('input[name=function]:checked').getAttribute('value') * 1;
});

createGrid(16);
formatCells();

function fill() {
    if (choice === 2) {
        let redNumber = Math.floor(Math.random() * 255);
        let greenNumber = Math.floor(Math.random() * 255);
        let blueNumber = Math.floor(Math.random() * 255);
        this.setAttribute('style', `background-color: rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
    } else if (choice === 3) {
        if (shade === 100 || shade === 0) {
            delta *= -1;
        }
        shade += delta;
        let colorNumber = 255 * shade / 100;
        this.setAttribute('style', `background-color: rgb(${colorNumber}, ${colorNumber}, ${colorNumber})`);
    }
    this.classList.add('filled');
}

function clear() {
    const cells = document.querySelectorAll('.grid div');
    cells.forEach(c => {
        grid.removeChild(c);
    });
    let side = prompt('Add number of squares per side for the new grid. The maximum is 100.', '100') * 1;
    if (isNaN(side) || side > 100 || side < 1) {
        side = 100;
    }
    createGrid(side);
    formatCells();
}

function createGrid(side) {
    root.style.setProperty('--repeatNumber', `${side}`);
    for (let i = 1; i <= side; i++) {
        for (let j = 1; j <= side; j++) {
            let cell = document.createElement('div');
            grid.appendChild(cell);
        }
    }
    container.appendChild(grid);
}

function formatCells() {
    let cellsOfGrid = document.querySelectorAll('.grid div');
    cellsOfGrid.forEach(c => {
        c.classList.add('cell');
        c.addEventListener('mouseover', fill);
    })
}

