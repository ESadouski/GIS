function drawBresenham() {

    fillSquares();

    var startX = filledSquares[0].xCord;
    var startY = filledSquares[0].yCord;
    var endX = filledSquares[1].xCord;
    var endY = filledSquares[1].yCord;

    var dx = Math.abs(endX - startX), sx = startX < endX ? 1 : -1;
    var dy = Math.abs(endY - startY), sy = startY < endY ? 1 : -1;
    var err = (dx>dy ? dx : -dy)/2;

    while (true) {
        squares[startX][startY] = false;
        if (startX === endX && startY === endY) break;
        var e2 = err;
        if (e2 > -dx) { err -= dy; startX += sx; }
        if (e2 < dy) { err += dx; startY += sy; }
    }

    paintOverBySquares();
}