function doBresenham(x1, y1, x2, y2) {
    var dx = Math.abs(x2 - x1), sx = x1 < x2 ? 1 : -1;
    var dy = Math.abs(y2 - y1), sy = y1 < y2 ? 1 : -1;
    var err = (dx>dy ? dx : -dy)/2;

    while (true) {
        squares[x1][y1] = false;
        if (x1 === x2 && y1 === y2) {
            break;
        }
        var e2 = err;
        if (e2 > -dx) {
            err -= dy; x1 += sx;
        }
        if (e2 < dy) {
            err += dx; y1 += sy;
        }
    }
}