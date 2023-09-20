let sun;
let planets = [];

function setup() {
  createCanvas(800, 600);
  sun = new CelestialObject(width / 2, height / 2, 50, color(255, 200, 0), 0, 0);
  planets.push(new CelestialObject(width / 2 + 200, height / 2, 10, color(0, 0, 255), random(-2, 2), random(-2, 2)));
  planets.push(new CelestialObject(width / 2 + 300, height / 2, 15, color(255, 0, 0), random(-1, 1), random(-1, 1)));
  planets.push(new CelestialObject(width / 2 + 400, height / 2, 12, color(0, 255, 0), random(-1.5, 1.5), random(-1.5, 1.5)));
}

function draw() {
  background(0);
  
  // Desenha o sol
  sun.display();
  
  // Atualiza e desenha os planetas
  for (let planet of planets) {
    planet.update();
    planet.display();
  }
}

class CelestialObject {
  constructor(x, y, radius, col, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.col = col;
    this.angle = random(TWO_PI);
    this.angleSpeed = random(0.01, 0.03);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  
  update() {
    this.angle += this.angleSpeed;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  
  display() {
    fill(this.col);
    ellipse(this.x, this.y, this.radius * 2);
  }
}





