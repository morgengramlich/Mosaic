'use strict';

function mosaic(colNum, rowNum, imagesArray) {
    let pan = document.getElementById('photo-mosaic');
    let images = imagesArray;
    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            pan.innerHTML = pan.innerHTML + template(i, j);
        }
    }

    setInterval(() => {
        let col, row;
        do {
            col = Math.floor(Math.random() * colNum);
            row = Math.floor(Math.random() * rowNum);
        } while (col < colNum - 2 - row);
        document.getElementById('m-el-' + col + '-'+ row).src = randomPhoto();
    }, 2000);

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
        return images[Math.floor(Math.random() * images.length)];
    }
}
