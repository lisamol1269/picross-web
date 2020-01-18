$(document).ready(() => {
    fillGrid(10,10);
});

function fillGrid(rows, cols) {
    const grid = document.querySelector('table tbody');
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

$('select').change(function() {
    console.log('change');
});