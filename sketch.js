var bird;
var pipes = [];
function setup() {
    createCanvas(400, 600); // p5
    bird = new Bird();
    pipes.push(new Pipe()); // js
}

function draw() {
    background(0);  // p5

    for (var i = pipes.length - 1; i >= 0; i--) {
        //for (var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1); // js
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 80 == 0) { // p5
        pipes.push(new Pipe()); // js
    }
}

function keyPressed() { // p5
    if (key == ' ') {    // p5
        bird.up();
    }
}