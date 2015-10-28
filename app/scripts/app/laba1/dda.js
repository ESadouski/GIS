function doDDA(x1, y1, x2, y2) {
    var length;

    if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
        length = Math.abs(x2 - x1);
    } else {
        length = Math.abs(y2 - y1);
    }

    var incrementX = (x2 - x1) / length;
    var incrementY = (y2 - y1) / length;

    for(var i = 0; i < length; i++) {
        x1 += incrementX;
        y1 += incrementY;
        squares[Math.floor(x1)][Math.floor(y1)] = false;
    }
}