'use strict';

function mosaic(elementId, colNum, rowNum, imagesArray, interval = 2000) {
    let pan = document.getElementById(elementId),
        images = imagesArray;

    let cellHeight = pan.offsetHeight / rowNum,
        cellWidth = pan.offsetWidth / colNum;

    pan.style.display = 'grid';
    pan.style.gridTemplateColumns = 'repeat(' + colNum + ', ' + cellWidth + 'px)';
    pan.style.gridTemplateRows = 'repeat(' + rowNum + ', ' + cellHeight + 'px)';

    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            let imgDiv = document.createElement('div');
            imgDiv.setAttribute('id', 'm-el-' + i + '-'+ j);
            applyStyleToGridElement(imgDiv, i, j);
            pan.appendChild(imgDiv);
        }
    }

    setInterval(() => {
        let col, row;
        col = Math.floor(Math.random() * colNum);
        row = Math.floor(Math.random() * rowNum);
        document.getElementById('m-el-' + col + '-'+ row).style.backgroundImage = 'url(' + randomPhoto() + ')';
    }, interval);

    function applyStyleToGridElement(domElement, column, row) {
        domElement.style.gridColumnStart = column+1;
        domElement.style.gridRowStart = row+1;
        domElement.style.height = cellHeight;
        domElement.style.width = cellWidth;
        domElement.style.backgroundImage = 'url(' + randomPhoto() + ')';
        domElement.style.backgroundSize = 'cover';
    }

    function randomPhoto() {
        return images[Math.floor(Math.random() * images.length)];
    }
}
