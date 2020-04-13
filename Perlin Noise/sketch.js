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
<<<<<<< Updated upstream
        
        stroke(0, 255, 255);
        var y = noise(xoff) * height;
     
        
        vertex(x, y);
        vertex(x, 0);
    
    

        xoff += 0.01;

=======

        stroke(0, 255, 255);
        var y = noise(xoff) * height;


        vertex(x, y);
        vertex(x, 0);



        xoff += 0.01;

>>>>>>> Stashed changes
    }
    endShape();

    noLoop();

    const ctx = canvas.getContext("2d");

    function drawArc(x, y, w, h, color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, w, h, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }

    const cloud1 = {
        x : random(0, 700),
        y : random(0, 100),
        w: 50,
        h: 30,
        color: "WHITE",
    }    
    
    const cloud2 = {
        x : random(0, 700),
        y : random(0, 100),
        w: 35,
        h: 10,
        color: "WHITE",
    }

    const cloud3 = {
        x : random(0, 700),
        y : random(0, 100),
        w: 40, 
        h: 10,
        color: "WHITE",
    }

    drawArc(cloud1.x, cloud1.y, cloud1.w, cloud1.h, cloud1.color);
    drawArc(cloud2.x, cloud2.y, cloud2.w, cloud2.h, cloud2.color);
    drawArc(cloud3.x, cloud3.y, cloud3.w, cloud3.h, cloud3.color);

    // var x = map(noise(xoff1), 0, 1, 0, width);
    // var y = map(noise(xoff2), 0, 1, 0, height);

    // xoff1 += 0.02;
    // xoff2 += 0.02;

    // ellipse(x, y, 24, 24);
<<<<<<< Updated upstream
}
=======

}






// // stroke(255);
// // // var n = map(noise(xoff)), 0., 1, 0, height);
// // // var s = map(sin(xoff), -1, 1, -50, 50);
// // // var y = s + n;

// // // var y = random(height);
// // var y = noise(xoff) * height;
// // vertex(x, y);

// // xoff += inc; 
>>>>>>> Stashed changes
