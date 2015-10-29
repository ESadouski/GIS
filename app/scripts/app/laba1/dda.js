function doDDA(x1, y1, x2, y2) {
    var usedPixels = [];
    var length;

    if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
        length = Math.abs(x2 - x1);
    } else {
        length = Math.abs(y2 - y1);
    }

    var incrementX = (x2 - x1) / length;
    var incrementY = (y2 - y1) / length;

    for (var i = 0; i < length; i++) {
        x1 += incrementX;
        y1 += incrementY;
        usedPixels[i] = {
            x: Math.floor(x1),
            y: Math.floor(y1),
            e: 1
        };
    }
    return usedPixels;
}