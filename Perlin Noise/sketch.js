var xoff1 = 0;
var xoff2 = 10000;

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(0, 255, 30);
    fill(0);
    stroke(255);
    strokeWeight(120);

    beginShape();

    var xoff = 0;


    for (var x = 0; x < innerWidth; x++){
        stroke(255);
        //var y = random(height);
        var y = noise(xoff) * height;
        // var splitY = noise(xoff) * height;
        // for (var y = 0; x < innerHeight; y++){
        //     if (y < splitY){
            
            
        //     //tegn brun
        
        // }
        // else
        //     //tegn blå
        
        vertex(x, y);
        vertex(x, 0)
    
    

        xoff += 1.5;
    }
    endShape();

    noLoop();

    // var x = map(noise(xoff1), 0, 1, 0, width);
    // var y = map(noise(xoff2), 0, 1, 0, height);

    // xoff1 += 0.02;
    // xoff2 += 0.02;

    // ellipse(x, y, 24, 24);
}