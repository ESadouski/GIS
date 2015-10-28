var squares = [];
var sizeSelect = document.getElementById("cnvSize");
var lineValue = sizeSelect.options[sizeSelect.selectedIndex].value; //size of square
var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");

var dots = [4];
var flag = true;

var debugX = 0;
var debugY = 0;

function drawGrid() {
    var countOfRect = Math.floor(cnv.height / lineValue);
    for (var x = 0; x < countOfRect; x++) {
        squares [x] = [];
        for (var y = 0; y < countOfRect; y++) {
            squares [x][y] = true;
            ctx.strokeRect(x * lineValue, y * lineValue, lineValue, lineValue);
        }
    }
}

function resizeCnv() {
    lineValue = sizeSelect.options[sizeSelect.selectedIndex].value;
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawGrid();
}

function drawLine(isDebug) {
    for (var x = debugX; x < squares.length; x++) {
        for (var y = debugY; y < squares.length; y++) {
            if (squares[x][y] == false) {
                ctx.fillRect(x * lineValue, y * lineValue, lineValue, lineValue);
                if (isDebug) {
                    debugX = x;
                    debugY = y;
                }
            } else {
                ctx.clearRect(x * lineValue, y * lineValue, lineValue, lineValue);
                ctx.strokeRect(x * lineValue, y * lineValue, lineValue, lineValue);
            }
        }
    }
}

function doAlgorithm() {
    var algorithm = $('input[name="optradio"]:checked').val();
    switch (algorithm) {
        case 'DDA' :
            doDDA(dots[0], dots[1], dots[2], dots[3]);
            break;
        case 'Bresenham' :
            doBresenham(dots[0], dots[1], dots[2], dots[3]);
            break;
        case 'VY' :
            doVY(dots[0], dots[1], dots[2], dots[3]);
            break;
    }
}

$('#cnv').click(function(event) {
    //var debug;
    //$('input[name="debugBtn"]:checked').val() ? debug = true : debug = false;
    //console.log(debug);
    var e = event;
    var drawX = Math.floor(e.offsetX / lineValue);
    var drawY = Math.floor(e.offsetY / lineValue);

    if (flag) {
        dots[0] = drawX;
        dots[1] = drawY;
        flag = false;
    } else {
        dots[2] = drawX;
        dots[3] = drawY;
        flag = true;
        doAlgorithm();
    }
    squares[drawX][drawY] = false;
    drawLine(false);

    event.preventDefault();
});

$("nextBtn").click(function() {
    //doAlgorithm();
    drawLine(true);
});

$("#clearBtn").click(function() {
    for(var x = 0; x < squares.length; x++) {
        for(var y = 0; y < squares.length; y++) {
            squares[x][y] = true;
        }
    }
    drawLine(false);
});
