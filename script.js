const wrapper = document.querySelector(".wrapper");
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
document.body.insertBefore(clearButton, wrapper);

for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', fill);
    wrapper.appendChild(cell);
}

function fill() {
    this.classList.add('filled');
}

