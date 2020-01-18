let gameState = []; // 0: default, 1: playerLeftClick, 2: playerFlag
$(document).ready(() => {
    init();
    listeners();
    $('select').change(function() {
        init();
        listeners();
    });
    $('#button-reset').click(function() {
        init();
        listeners();
    });
});

function listeners() {
    $('td').on('contextmenu', (e) => {
        e.preventDefault();
        console.log('right click');
        const obj = $(e.currentTarget);
        playerFlag(obj.attr('row'), obj.attr('col'));
    });
    $('td').click((e) => {
        const obj = $(e.currentTarget);
        playerLeftClick(obj.attr('row'), obj.attr('col'));
    });
}

function init() {
    gameState = [];
    const match = $('select').val().match(/\d+/g);
    fillGrid(Number.parseInt(match[1]), Number.parseInt(match[0]));
    const board = initBoard();
    for (let i = 0; i < board.length; i++) {
        gameState.push([]);
        for (let j = 0; j < board[0].length; j++) {
            gameState[i][j] = 0;
        }
    }
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
                mat[i][j] = 1; // 1 is block, and player must left click these cells
                $(`#${i}`).children()[j].style.backgroundColor = 'lightGreen';
            }
            else {
                mat[i][j] = 0; // 0 is empty space, and player may flag these cells
            }
        }
    }
    return mat;
}

function playerFlag(row, col) {
    //const color = $(`#${row}`).children()[col].style.backgroundColor;
    const cellState = gameState[row][col];
    if (cellState == 2) {
        gameState[row][col] = 0;
        $(`#${row}`).children()[col].style.backgroundColor = 'white';
    } else {
        gameState[row][col] = 2;
        $(`#${row}`).children()[col].style.backgroundColor = 'lightgray';
    }
}

function playerLeftClick(row, col) {
    const cellState = gameState[row][col];
    if (cellState == 1) {
        gameState[row][col] = 0;
        $(`#${row}`).children()[col].style.backgroundColor = 'white';
    } else {
        gameState[row][col] = 1;
        $(`#${row}`).children()[col].style.backgroundColor = 'black';
    }
}
