var bird;
var pipes = [];
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);
	bird.update();
	bird.show();
	
	for (var i = pipes.lenght-1; i >= 0; i--) {
		pipe.show();
		pipes[i].update();
	}
	
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}
}