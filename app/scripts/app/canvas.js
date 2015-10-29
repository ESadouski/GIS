var sizeSelect = document.getElementById("cnvSize");
var lineValue = sizeSelect.options[sizeSelect.selectedIndex].value; //square size
var cnv = document.getElementById("cnv");
var ctx = cnv.getContext("2d");
var rectCount;

var isFirstPixel = true;
var debugIndex = 0;
var debugMode = false;

const dots = [4];

function drawGrid() {
    rectCount = Math.floor(cnv.height / lineValue);
    for (var x = 0; x < rectCount; x++) {
        for (var y = 0; y < rectCount; y++) {
            ctx.strokeRect(x * lineValue, y * lineValue, lineValue, lineValue);
        }
    }
}

function resizeCnv() {
    lineValue = sizeSelect.options[sizeSelect.selectedIndex].value;
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawGrid();
}

function drawLine(drownPixels) {
    for (var i = 0; i < drownPixels.length; i++) {
        plot(drownPixels[i].x, drownPixels[i].y, drownPixels[i].e);
    }
}

function debugLine(drownPixels) {
    if (debugIndex === 0) {
        console.log("Debug mode activated");
    }
    if (debugIndex > drownPixels.length) {
        console.log("Debug was done");
        return;
    }
    const x = drownPixels[debugIndex].x;
    const y = drownPixels[debugIndex].y;
    const e = drownPixels[debugIndex].e;
    plot(x, y, e);
    console.log("Plot pixel(" + x + ";" + y + ") " + "with intensive " + e);
    console.log(debugIndex);
    debugIndex++;
}

function plot(x, y, e) {
    if (e !== null) {
        ctx.globalAlpha=e;
    } else {
        ctx.globalAlpha=1;
    }
    ctx.fillRect(x * lineValue, y * lineValue, lineValue, lineValue);
}

function doAlgorithm() {
    const algorithm = $('input[name="optradio"]:checked').val();
    //window[algorithm].apply(this, dots);
    //window[algorithm].call();
    switch (algorithm) {
        case 'doDDA' :
            return doDDA(dots[0], dots[1], dots[2], dots[3]);
        case 'doBresenham' :
            return doBresenham(dots[0], dots[1], dots[2], dots[3]);
        case 'doWU' :
            return doWU(dots[0], dots[1], dots[2], dots[3]);

    }
}

$('#cnv').click(function(event) {
    const e = event;
    const drawX = Math.floor(e.offsetX / lineValue);
    const drawY = Math.floor(e.offsetY / lineValue);

    if (isFirstPixel) {
        dots[0] = drawX;
        dots[1] = drawY;
    } else {
        dots[2] = drawX;
        dots[3] = drawY;
        debugIndex = 0;
        if (!debugMode) {
            drawLine(doAlgorithm());
        }
    }
    plot(drawX, drawY, 1);
    isFirstPixel = !isFirstPixel;

    event.preventDefault();
});

$("#nextBtn").click(function() {
    if(debugMode) {
        debugLine(doAlgorithm());
    }

});

$("#clearBtn").click(function() {
    for (var x = 0; x < rectCount; x++) {
        for (var y = 0; y < rectCount; y++) {
            ctx.clearRect(x * lineValue, y * lineValue, lineValue, lineValue);
            ctx.strokeRect(x * lineValue, y * lineValue, lineValue, lineValue);
        }
    }
});

$('#debugBtn').click(function() {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
        debugMode = true;
    } else {
        debugMode = false;
    }
    });