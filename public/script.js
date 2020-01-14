$(document).ready(() => {
    fillGrid(4,4);
});

function fillGrid(cols, rows) {
    const grid = document.querySelector('table.grid-conatiner');
    grid.innerHTML = '';
    console.log(grid);
    for (let i = 0; i < cols; i++) {
        const r = document.createElement('tr');
        r.setAttribute('id', i);
        for (let j = 0; j < rows; j++) {
            const td = document.createElement('td');
            td.setAttribute('col', i.toString());
            td.setAttribute('row', j.toString());
            td.setAttribute('class', 'grid-item');
            r.appendChild(td);
        }
        grid.appendChild(r);
    }
}

function get2D(index) {

}