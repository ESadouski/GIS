function drawDDA() {
    fillSquares();

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

    paintOverBySquares();
}