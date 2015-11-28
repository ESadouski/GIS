function ipart(x) {
    return Math.floor(x);
}

function fpart(x) {
    return x - Math.floor(x);
}

function rfpart(x) {
    return 1 - fpart(x);
}

function doWU(x1, y1, x2, y2) {
    var usedPixels = [];

    var swapPlot = function(swapAxes, x, y, e) {
        if (swapAxes) {
            usedPixels.push({
                x: y,
                y: x,
                e: e
            });
        } else {
            usedPixels.push({
                x: x,
                y: y,
                e: e
            });
        }
    };
    var dx = x2 - x1;
    var dy = y2 - y1;
    var swapAxes = false;

    if (Math.abs(dx) < Math.abs(dy)) {
        swapAxes=true;
        var t;
        t = x1; x1 = y1; y1 = t;
        t = x2; x2 = y2; y2 = t;
        t = dx; dx = dy; dy = t;
    }
    if (x2 < x1) {
        t = x1; x1 = x2; x2 = t;
        t = y1; y1 = y2; y2 = t;
    }
    var gradient = dy / dx;

    // handle first endpoint
    var xend = Math.round(x1);
    var yend = y1 + gradient * (xend - x1);
    var xgap = rfpart(x1 + 0.5);
    var xpxl1 = xend;
    var ypxl1 = ipart(yend);

    swapPlot(swapAxes, xpxl1, ypxl1, 1);
    var intery = yend + gradient;

    // handle second endpoint
    xend = Math.round(x2);
    yend = y2 + gradient * (xend - x2);
    xgap = fpart(x2 + 0.5);
    var xpxl2 = xend;
    var ypxl2 = ipart(yend);
    swapPlot(swapAxes, xpxl2, ypxl2, 1);

    // main loop
    for (x = xpxl1 + 1; x <= xpxl2 - 1; x++) {
        swapPlot(swapAxes, x, ipart(intery), rfpart(intery));
        swapPlot(swapAxes, x, ipart(intery) + 1, fpart(intery));
        intery = intery + gradient;
    }

    return usedPixels;
}