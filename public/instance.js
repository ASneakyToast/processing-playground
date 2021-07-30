class Agent {
  constructor(p, x, y) {
    this.p = p;

    this.pos = p.createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = p.createVector(0, 0, 0);

    this.mass = 1;

    this.size = { d: 5 };
  }

  // Newton's 2nd law: F = M * A
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  draw(p) {
    p.stroke(0);
    p.strokeWeight(1);
    p.fill(255);
    p.ellipse(this.pos.x, this.pos.y, this.size.d*this.mass, this.size.d*this.mass);
  }

  loop(p) {
    this.update();
    this.checkEdges(p);
    this.draw(p);
  }

  checkEdges(p) {
    if (this.pos.y > p.height) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = p.height;
    }
    if (this.pos.x > p.width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = p.width;
    }
  }
}

const s = ( p ) => {
  let x = 50;
  let y = 50;
  let agent = new Agent(p, 50, 50);

  p.setup = function() {
    let container = document.getElementById("myContainer");
    let canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent("myContainer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);

    let gravity = p.createVector(0, 0.1 * agent.mass);
    agent.applyForce(gravity);
    agent.loop(p);
  };
};

let myp5 = new p5(s, "myContainer");
