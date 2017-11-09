'use strict';

(function () {
    init(5, 5);
    permutation(5, 5);
})();

function photos() {
    return [
        'photos/IMG_0.jpg',
        'photos/IMG_1.jpg',
        'photos/IMG_2.jpg',
        'photos/IMG_3.jpg',
        'photos/IMG_4.jpg'
    ];
}

function template(column, row) {
    return '<img src="'
        + randomPhoto()
        + '" style="grid-column-start: '+ (column+1)
        + '; grid-row-start: '+ (row+1)
        + '; height: 96px; width: 128px;" id="m-el-'
        + column + '-'+ row
        + '"/>';
}

function randomPhoto() {
    let photosArray = photos();
    return photosArray[Math.floor(Math.random()*photosArray.length)];
}

function init(colNum, rowNum) {
    let pan = document.getElementById('photo-mosaic');
    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            pan.innerHTML = pan.innerHTML + template(i, j);
        }
    }
}

function permutation(rangeCols, rangeRows) {
    setInterval(() => {
        let colNum;
        let rowNum;
        do {
            colNum = Math.floor(Math.random() * rangeCols);
            rowNum = Math.floor(Math.random() * rangeRows);
        } while (colNum < rangeCols - 2 - rowNum);
        document.getElementById('m-el-' + colNum + '-'+ rowNum).src = randomPhoto();
    }, 2000);
}
