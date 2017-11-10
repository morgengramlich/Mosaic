# Mosaic
Mosaic is a small JavaScript library which allows you to create a pane filled with changing images.

## Usage
1. Add mosaic.js script to your html
2. Call function ```mosaic(elementId, colsNum, rowsNum, imagesArray, interval)``` where:
   - ```elementId``` is the id of the pane elementId
   - ```colsNum``` is the number of columns in the pane
   - ```rowsNum``` is the number of rows in the pane
   - ```imageArray``` is the array of images' URLs
   - ```interval``` is the time interval before the random image changes (default value is 2 seconds)
