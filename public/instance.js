class Circle {
  constructor(p, x, y) {
    this.pos = p.createVector(x, y);
    this.vel = p.Vector.random2D();
    this.acc = p.createVector(0, 0, 0);

    this.size = { d: 50 };
  }

  draw(p) {
    p.circle(this.pos.x, this.pos.y, this.size.d);
  }
}

const s = ( p ) => {
  let x = 50;
  let y = 50;
  let circle = new Circle(p, 50, 50);

  p.setup = function() {
    let container = document.getElementById("myContainer");
    let canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent("myContainer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
    circle.draw(p);
  };
};

let myp5 = new p5(s, "myContainer");
