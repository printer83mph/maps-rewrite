var balls = [];

function Ball(x, y, r) {
  this.r = r;
  this.acceleration = new p5.Vector(0, 0);
  this.velocity = new p5.Vector(0, 0);
  this.position = new p5.Vector(x, y);
  
  this.checkEdgeCollide = function() {
    if(this.position.x < this.r) {
      this.position.x = this.r;
      this.acceleration.x += this.velocity.x * -1.8;
	  console.log('hit wall');
    }
    if(this.position.x > width - this.r) {
      this.position.x = width - this.r;
      this.acceleration.x += this.velocity.x * -1.8;
	  console.log('hit wall');
    }
    if(this.position.y < this.r) {
      this.position.y = this.r;
      this.acceleration.y += this.velocity.y * -1.8;
	  console.log('hit wall');
    }
    if(this.position.y > height - this.r) {
      this.position.y = height - this.r;
      this.acceleration.y += this.velocity.y * -1.8;
	  console.log('hit wall');
    }
  }
  
  this.movement = function() {
    this.acceleration.set(0,1);
    this.checkEdgeCollide();
	console.log(this.acceleration.y + ' accel');
    this.velocity.add(this.acceleration);
	console.log(this.velocity.y + ' speed');
    this.position.add(this.velocity);
  }
  
  this.draw = function() {
    this.movement();
    fill(0,0);
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
  }
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  smooth();
}

function draw() {
  background(255);
  for(var i in balls) {
	balls[i].draw();
  }
}

function keyPressed() {
	if(key === "F") {
		balls.push(new Ball(mouseX,mouseY,random(10,100)));
	}
}