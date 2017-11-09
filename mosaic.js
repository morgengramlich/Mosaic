'use strict';

function mosaic(colNum, rowNum, imagesArray) {
    let pan = document.getElementById('mosaic'),
        images = imagesArray;

    let cellHeight = pan.offsetHeight / rowNum,
        cellWidth = pan.offsetWidth / colNum;

    pan.style.display = 'grid';
    pan.style.gridTemplateColumns = 'repeat(' + colNum + ', ' + cellWidth + 'px)';
    pan.style.gridTemplateRows = 'repeat(' + rowNum + ', ' + cellHeight + 'px)';

    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            pan.innerHTML = pan.innerHTML + template(i, j);
        }
    }

    setInterval(() => {
        let col, row;
        col = Math.floor(Math.random() * colNum);
        row = Math.floor(Math.random() * rowNum);
        document.getElementById('m-el-' + col + '-'+ row).style.backgroundImage = 'url(' + randomPhoto() + ')';
    }, 2000);

    function template(column, row) {
        return '<div '
            +'style="grid-column-start: '+ (column+1) + '; '
                + 'grid-row-start: '+ (row+1) + '; '
                + 'height: ' + cellHeight + 'px; '
                + 'width: ' + cellWidth + 'px; '
                + 'background-image: url(' + randomPhoto() + '); background-size: cover"'
            +'id="m-el-' + column + '-'+ row + '"'
            +'/>';
    }

    function randomPhoto() {
        return images[Math.floor(Math.random() * images.length)];
    }
}
