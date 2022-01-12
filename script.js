const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.setAttribute('id', 'clear');
container.appendChild(clearButton);
container.appendChild(grid);

for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', fill);
    grid.appendChild(cell);
}

function fill() {
    this.classList.add('filled');
}

