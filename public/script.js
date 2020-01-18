$(document).ready(() => {
    init();
    $('select').change(function() {
        init();
    });
    $('#button-reset').click(function() {
        init();
    });
    document.querySelector('table').addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

function init() {
    const match = $('select').val().match(/\d+/g);
    fillGrid(Number.parseInt(match[1]), Number.parseInt(match[0]));
    initBoard();
}

function fillGrid(rows, cols) {
    const grid = document.querySelector('table tbody');
    console.log(rows, cols);
    grid.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const r = document.createElement('tr');
        r.setAttribute('id', i);
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.setAttribute('col', j.toString());
            td.setAttribute('row', i.toString());
            td.setAttribute('class', 'grid-item');
            r.appendChild(td);
            //console.log(td.outerHTML);
        }
        grid.innerHTML += r.outerHTML;
    }
}

function initBoard() {
    const sel = $('select');
    const m = sel.val().match(/\d+/g);
    const rows = Number.parseInt(m[1]);
    const cols = Number.parseInt(m[0]);
    const slide = $('input.slider');
    let mat = [];
    for (let i = 0; i < rows; i++) {
        mat.push([]);
        for (let j = 0; j < cols; j++) {
            if (Math.random() < slide.val()) {
                mat[i][j] = 1;
                $(`#${i}`).children()[j].style.backgroundColor = 'lightGreen';
            }
            else {
                mat[i][j] = 0;
            }
        }
    }
    return mat;
}