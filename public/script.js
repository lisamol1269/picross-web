$(document).ready(() => {
    const sel = $('select');
    const m = sel.val().match(/\d+/g);
    fillGrid(m[1], m[0]);
    initBoard();
    sel.change(function() {
        const match = sel.val().match(/\d+/g);
        fillGrid(match[1], match[0]);
        initBoard();
    });
});

function fillGrid(rows, cols) {
    const grid = document.querySelector('table tbody');
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
    const rows = Integer.parseInt(m[0]);
    const cols = Integer.parseInt(m[1]);
    const slide = $('input.slider');
    let mat = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (Math.random() < slide.val()) {
                mat[i][j] = 1;
            }
            else {
                mat[i][j] = 0;
            }
        }
    }
    return mat;
}