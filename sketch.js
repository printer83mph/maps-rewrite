var balls = [];

function Ball(x, y, r) {
  this.r = r;
  this.acceleration = new p5.Vector(0, 0);
  this.velocity = new p5.Vector(0, 0);
  this.position = new p5.Vector(x, y);
	this.dragged = false;
  
  this.checkEdgeCollide = function() {
    if(this.position.x < this.r) {
      this.position.x = this.r;
      this.acceleration.x += this.velocity.x * -1.8;
	  // console.log('hit wall');
    }
    if(this.position.x > width - this.r) {
      this.position.x = width - this.r;
      this.acceleration.x += this.velocity.x * -1.8;
	  // console.log('hit wall');
    }
    if(this.position.y < this.r) {
      this.position.y = this.r;
      this.acceleration.y += this.velocity.y * -1.8;
	  // console.log('hit wall');
    }
    if(this.position.y > height - this.r) {
      this.position.y = height - this.r;
      this.acceleration.y += this.velocity.y * -1.8;
	  // console.log('hit wall');
    }
  }
  
  this.movement = function() {
		// console.log(this.acceleration.y + ' accel');
    this.velocity.add(this.acceleration);
		// console.log(this.velocity.y + ' speed');
    this.position.add(this.velocity);
		this.acceleration.set(0,0.3);
		this.checkEdgeCollide();
		this.acceleration.sub(this.velocity.x * 0.005, this.velocity.y * 0.005);
		if(this.dragged) {
			this.acceleration.add((mouseX-this.position.x)/r/5,(mouseY-this.position.y)/r/5);
		}
		stroke(255,0,0);
		line(this.position.x, this.position.y, this.position.x + this.acceleration.x * 100, this.position.y + this.acceleration.y * 100);
  }
  
  this.draw = function() {
		this.movement();
    fill(0,0);
		stroke(0);
    ellipse(this.position.x, this.position.y, this.r*2, this.r*2);
		if(this.dragged) {
			line(this.position.x,this.position.y,mouseX,mouseY);
		}
  }
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  smooth();
	strokeWeight(5);
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

function mousePressed() {
  for(var i in balls) {
	  if(dist(mouseX,mouseY,balls[i].position.x,balls[i].position.y) < balls[i].r) {
			balls[i].dragged = true;
		}
  }
}

function mouseReleased() {
  for(var i in balls) {
		balls[i].dragged = false;
  }
}