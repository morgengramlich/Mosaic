# Mosaic
Mosaic is a small JavaScript function which allows you to create a pane filled with changing images.

## Usage
1. Include mosaic.js script in your page
2. Call function ```mosaic(elementId, colsNum, rowsNum, imagesArray, interval)``` where:
   - ```elementId``` is the id of the pane element
   - ```colsNum``` is the number of columns in the pane
   - ```rowsNum``` is the number of rows in the pane
   - ```imageArray``` is the array of images' URLs
   - ```interval``` is the time interval before the random image changes (default value is 2 seconds)
