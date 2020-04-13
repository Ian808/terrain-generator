var xoff1 = 0;
var xoff2 = 10000;

var inc = 0.01; 

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
    noStroke();
    colorMode(HSB, 256);
}

function draw() {
    background(255, 255, 255); 
    fill(146, 155, 104);
    var yoff = 0;

    loadPixels();
    for (var y = 0; y < width; y++) {
        var xoff = 0;
        for (var x = 0; x < height; x++) {
            var index = (x + y * width) * 4; 
            var r = noise(xoff, yoff) * 255;
            fill(r, 255, 255);
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 155;

            xoff += inc;
        }
        yoff += inc;
    } 
    updatePixels();
}



