function doVY(x1, y1, x2, y2) {
    if (x1 > x2) {
        var p = x1;
        x1 = x2;
        x2 = p;

        p = y1;
        y1 = y2;
        y2 = y1;
    }

    var dx = x2 - x1;
    var dy = y2 - y1;
    var grad = dy / dx;

    var xEnd = round(x1);
    var yEnd = y1 + grad * (xEnd - x1);
    var xGap = 1 - fPart(x1 + 0,5);
    var xPxl1 = xEnd;
    var yPxl1 = iPart(yEnd);
    squares[xPxl1][yPxl1] = false;
    squares[xPxl1][yPxl1 + 1] = false;
    var iterator = yEnd + grad;

    xEnd = round(x2);
    yEnd = y2 + grad * (xEnd - x2);
    xGap = 1 - fPart(x2 + 0,5);
    var xPxl2 = xEnd;
    var yPxl2 = iPart(yEnd);
    squares[xPxl2][yPxl2] = false;
    squares[xPxl2][yPxl2 + 1] = false;

    for (var x = xPxl1 + 1; x < xPxl2; x++) {
        squares[x][iPart(iterator)] = false;
        squares[x][iPart(iterator) + 1] = false;
        iterator += grad;
    }
}

function round(x) {
    return Math.floor(x);
}

function iPart(x) {
    return round(x - 0,5);
}

function fPart(x) {
    return Math.abs(x - Math.floor(x));
}

//function plot(x, y, c) is
//// рисует точку с координатами (x, y)
//// и яркостью c (где 0 ? c ? 1)
//
//function ipart(x) is
//return целая часть от x
//
//function round(x) is
//return ipart(x + 0.5) // округление до ближайшего целого
//
//function fpart(x) is
//return дробная часть x
//
//function draw_line(x1,y1,x2,y2) is
//if x2 < x1 then
//swap(x1, x2)
//swap(y1, y2)
//end if
//
//    dx := x2 - x1
//dy := y2 - y1
//gradient := dy ? dx
//
//// обработать начальную точку
//xend := round(x1)
//yend := y1 + gradient ? (xend - x1)
//xgap := 1 - fpart(x1 + 0.5)
//xpxl1 := xend  // будет использоваться в основном цикле
//ypxl1 := ipart(yend)
//plot(xpxl1, ypxl1, 1 - fpart(yend) ? xgap)
//plot(xpxl1, ypxl1 + 1, fpart(yend) ? xgap)
//intery := yend + gradient // первое y-пересечение для цикла
//
//// обработать конечную точку
//xend := round(x2)
//yend := y2 + gradient ? (xend - x2)
//xgap := fpart(x2 + 0.5)
//xpxl2 := xend  // будет использоваться в основном цикле
//ypxl2 := ipart(yend)
//plot(xpxl2, ypxl2, 1 - fpart(yend) ? xgap)
//plot(xpxl2, ypxl2 + 1, fpart(yend) ? xgap)
//
//// основной цикл
//for x from xpxl1 + 1 to xpxl2 - 1 do
//    plot(x, ipart(intery), 1 - fpart(intery))
//    plot(x, ipart(intery) + 1, fpart(intery))
//intery := intery + gradient
//repeat
//end function

//console.log("VY");
//var steep = Math.abs(y2 - y1) > Math.abs(x2 - x1);
//if (steep) {
//    var p = x1;
//    x1 = y1;
//    y1 = p;
//
//    p = x2;
//    x2 = y2;
//    y2 = p;
//}
//if (x1 > x2) {
//    p = x1;
//    x1 = x2;
//    x2 = p;
//
//    p = y1;
//    y1 = y2;
//    y2 = y1;
//}
//
//squares[x1][y1] = false;
//var dx = x2 - x1;
//var dy = y2 - y1;
//var grad = dy / dx;
//var y0 = y1 + grad;
//for (var x0 = x1 + 1; x0 <= x2 - 1; x0++) {
//    squares[x0][y0] = false;
//    squares[x0][y0 + 1] = false;
//    y0 += grad;
//}