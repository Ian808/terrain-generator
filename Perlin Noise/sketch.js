var xoff1 = 0;
var xoff2 = 10000;

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(0, 255, 30);
    noFill();
    stroke(255, 0, 255);
    strokeWeight(50);

    beginShape();

    var xoff = 0;

 

    for (var x = 0; x < innerWidth; x++){
        
        stroke(0, 255, 255);
        var y = noise(xoff) * height;
     
        
        vertex(x, y);
        vertex(x, 0);
    
    

        xoff += 0.01;

    }
    endShape();

    noLoop();

    // var x = map(noise(xoff1), 0, 1, 0, width);
    // var y = map(noise(xoff2), 0, 1, 0, height);

    // xoff1 += 0.02;
    // xoff2 += 0.02;

    // ellipse(x, y, 24, 24);
}
