const table = document.getElementById('pixelCanvas');
const submit = document.getElementById('submitButton');

// clicking the Submit button will store height/width values to be used in making the pixel grid
submit.addEventListener("click", function(event) {
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});
// loop over height and width input to create rows and columns(cells).
function makeGrid(height, width) {
// reset table each time submit button is pressed
table.innerHTML = " ";
  for (let m=0; m < height; m++){
    var row = document.createElement('tr');
      for (let n=0; n < width; n++){
        var cell = document.createElement('td');
        cell.addEventListener("click", function(event) {
          var colorChoice = document.getElementById('colorPicker');
          event.target.style.backgroundColor = colorChoice.value;
          });
          row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
