var bird;
var pipes = [];
var scorepoints = [];
var score = 0;
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  scorepoints.push(new scorepoint());
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      //console.log("HIT");

    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

for (var o = scorepoints.length-1; o >= 0; o--) {
  scorepoints[o].show();
  scorepoints[o].update();

  if (scorepoints[o].offscreen()){
    scorepoints.splice(o, 1);
  }

  if (scorepoints[o].hits(bird)) {
    console.log("score");
  }
}

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    scorepoints.push(new scorepoint());
    pipes.push(new Pipe());
  }



}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
