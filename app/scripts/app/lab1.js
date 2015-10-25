var filledSquares = [];

function fillSquares() {
    filledSquares = [];
    for(x=0; x < squares.length; x++) {
        for(y=0; y < squares.length; y++) {
            if (squares[x][y] === false) {
                var square = {
                    xCord: x,
                    yCord: y
                };
                filledSquares.push(square);
            }
        }
    }
    console.log("fiil - ");
    console.log(filledSquares);
}

function drawDDA() {
    fillSquares();
    console.log(squares);

    var startX = filledSquares[0].xCord;
    var startY = filledSquares[0].yCord;
    var endX = filledSquares[1].xCord;
    var endY = filledSquares[1].yCord;
    var l;

    if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
        l = Math.abs(endX - startX);
    } else {
        l = Math.abs(endY - startY);
    }

    var incrementX = (endX - startX)/l;
    var incrementY = (endY - startY)/l;

    for(i=0; i < l; i++) {
        startX += incrementX;
        startY += incrementY;
        squares[Math.floor(startX)][Math.floor(startY)] = false;
    }

    console.log(squares);

    paintOverBySquares();
    console.log(l);
}

$("#startBtn").click(function() {
    drawDDA();
});

$("#clearBtn").click(function() {
    for(x=0; x < squares.length; x++) {
        for(y=0; y < squares.length; y++) {
        squares[x][y] = true;
        }
    }
    paintOverBySquares();
});