const grid = document.querySelector('#grid');

function highlighter() {
    const elements = document.querySelectorAll('.column');
    console.log(elements);

    let isPressed = false;

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (isPressed && element.style.backgroundColor !== '#000') {
                element.style.backgroundColor = '#000';
            }
        });

        element.addEventListener('mouseleave', () => {
            if (isPressed && element.style.backgroundColor === '#000') {
                element.style.backgroundColor = '#ebe9e9';
            }
        });

        element.addEventListener('mousedown', () => {
            isPressed = true;
        });

        element.addEventListener('mouseup', () => {
            isPressed = false;
        });

        element.addEventListener('selectstart', (event) => {
            event.preventDefault();
        });
    });
}

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    //row.innerHTML = "<p>row "+ i +"</p>";
    grid.appendChild(row);

    for (let j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.setAttribute('id', 'r' + i + 'c' + j);
        //column.innerHTML = "<p>column "+ j +"</p>";
        row.appendChild(column);
    }
}
highlighter();

const resizeBtn = document.querySelector('#prompt');
resizeBtn.addEventListener('click', () => {
    var input = prompt('Resize the drawing grid from 1 to 100');
    if (input < 1 || input > 100) {
        alert('Please enter a number between 1 and 16');
    } else {
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            grid.removeChild(row);
        });

        for (let i = 0; i < input; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            //row.innerHTML = "<p>row "+ i +"</p>";
            grid.appendChild(row);
        
            for (let j = 0; j < input; j++) {
                const column = document.createElement('div');
                column.classList.add('column');
                column.setAttribute('id', 'r' + i + 'c' + j);
                //column.innerHTML = "<p>column "+ j +"</p>";
                row.appendChild(column);
            }
        }
    }
    highlighter();
});