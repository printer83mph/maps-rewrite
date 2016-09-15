var balls = [];

function Ball(x, y, r) {
  this.r = r;
  this.acceleration = new p5.Vector(0, 0);
  this.velocity = new p5.Vector(0, 0);
  this.position = new p5.Vector(x, y);
  
  this.checkEdgeCollide = function() {
    if(this.position.x < this.r) {
      this.position.x = this.r;
      this.acceleration.x += this.velocity.x *= -0.8;
    }
    if(this.position.x > width - this.r) {
      this.position.x = width - this.r;
      this.acceleration.x += this.velocity.x *= -0.8;
    }
    if(this.position.y < this.r) {
      this.position.y = this.r;
      this.acceleration.y += this.velocity.y *= -0.8;
    }
    if(this.position.y > height - this.r) {
      this.position.y = height - this.r;
      this.acceleration.y += this.velocity.y *= -0.8;
    }
  }
  
  this.movement = function() {
    this.acceleration.set(0,0.3);
    this.checkEdgeCollide();
    this.acceleration.add(this.velocity.mul(-0.005));
    this.velocity.add(this.acceleration);
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
}

function draw() {
  
}