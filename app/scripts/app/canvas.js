var squares = [];
var sizeSelect = document.getElementById("cnvSize");
var lineValue = sizeSelect.options[sizeSelect.selectedIndex].value; //size of square
var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");

function drawGrid() {
    var countOfRect = Math.floor(cnv.height / lineValue);

    for (x=0; x < countOfRect; x++) {
        squares [x] = [];
        for (y=0; y < countOfRect; y++) {
            squares [x][y] = true;
            ctx.strokeRect(x * lineValue, y * lineValue, lineValue, lineValue);
        }
    }
}

$('#cnv').click(function(event) {
    e = event;
    drawX = Math.floor(e.offsetX / lineValue);
    drawY = Math.floor(e.offsetY / lineValue);

    if (squares [drawX][drawY]) {
        squares [drawX][drawY] = false;
        ctx.fillRect(drawX*lineValue, drawY*lineValue, lineValue, lineValue);
    } else {
        squares [drawX][drawY] = true;
        ctx.clearRect(drawX*lineValue, drawY*lineValue, lineValue, lineValue);
        ctx.strokeRect(drawX * lineValue, drawY * lineValue, lineValue, lineValue);
    }

    event.preventDefault();
});

function resizeCnv() {
    lineValue = sizeSelect.options[sizeSelect.selectedIndex].value;

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawGrid();
}

function paintOverBySquares() {
    for(x=0; x < squares.length; x++) {
        for(y=0; y < squares.length; y++) {
            if (squares[x][y] === false) {
                ctx.fillRect(x * lineValue, y * lineValue, lineValue, lineValue);
            } else {
                ctx.clearRect(x*lineValue, y*lineValue, lineValue, lineValue);
                ctx.strokeRect(x * lineValue, y * lineValue, lineValue, lineValue);
            }
        }
    }
}