function drawGrid() {
    var cnv = document.getElementById("cnv");

    var gridOptions = {
        separation: 30,
        color: '#000000'
    };

    drawGridLines(cnv, gridOptions);

}

function drawGridLines(cnv, line) {


    var iWidth = cnv.width;
    var iHeight = cnv.height;

    var ctx = cnv.getContext('2d');

    ctx.strokeStyle = line.color;
    ctx.strokeWidth = 1;

    ctx.beginPath();

    var iCount = null;
    var i = null;
    var x = null;
    var y = null;

    iCount = Math.floor(iWidth / line.separation);

    for (i = 1; i <= iCount; i++) {
        x = (i * line.separation);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, iHeight);
        ctx.stroke();
    }


    iCount = Math.floor(iHeight / line.separation);

    for (i = 1; i <= iCount; i++) {
        y = (i * line.separation);
        ctx.moveTo(0, y);
        ctx.lineTo(iWidth, y);
        ctx.stroke();
    }

    ctx.closePath();

    return;
}

function resizeCnv() {
    var cnv = document.getElementById("cnv");
    var ctx = cnv.getContext("2d");
    var select = document.getElementById("cnvSize");
    var lineValue = select.options[select.selectedIndex].value;

    var gridOptions = {
        separation: lineValue,
        color: '#000000'
    };

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawGridLines(cnv, gridOptions);
}