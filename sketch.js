let w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16;
let density;
let span;
let count = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(2);
  background(0);

  density = width / 16;

  span = 0;

  w1 = new Worm(span, span += density);
  w2 = new Worm(span, span += density);
  w3 = new Worm(span, span += density);
  w4 = new Worm(span, span += density);

  w5 = new Worm(span, span += density);
  w6 = new Worm(span, span += density);
  w7 = new Worm(span, span += density);
  w8 = new Worm(span, span += density);

  w9 = new Worm(span, span += density);
  w10 = new Worm(span, span += density);
  w11 = new Worm(span, span += density);
  w12 = new Worm(span, span += density);

  w13 = new Worm(span, span += density);
  w14 = new Worm(span, span += density);
  w15 = new Worm(span, span += density);
  w16 = new Worm(span, span += density);
}

function draw() {
  count++;
  if (count % 5 == 0) {
    noStroke();
    fill(0, 0, 0, 5);
    rectMode(CENTER);
    rect(width / 2, height / 2, width, height);
  }

  for (let i = 0; i < 2; i++) {
    w1.display();
    w2.display();
    w3.display();
    w4.display();

    w5.display();
    w6.display();
    w7.display();
    w8.display();

    w9.display();
    w10.display();
    w11.display();
    w12.display();

    w13.display();
    w14.display();
    w15.display();
    w16.display();
  }
  
  textSize(windowWidth/7);
  fill(255);
  // textAlign(CENTER);
  text('CROSSING', 30, windowHeight/4);
  text('FONDS', 30, windowHeight/2)
  // text('CROSSING FONDS', windowWidth/2, windowHeight/2-20);
}

class Worm {
  constructor(_high, _low) {
    this.limit = 6;
    this.x = new Array(this.limit);
    this.y = new Array(this.limit);

    this.flux = 2;
    this.s = 0;
    this.count = 0;

    this.d = 5;

    this.f = 1;

    this.w = width;
    this.h = height;

    this.theta = 0;
    this.theta2 = 0;

    this.bCount = 0;
    this.size = 0;

    this.mX = 0;
    this.mY = 0;

    this.limit2 = 0;

    this.mC = 1;

    this.high = _high;
    this.low = _low;
    this.xshift = random(this.high, this.low);
    this.yshift = height;
    this.wave = random(1, 100);

    for (let i = 0; i < this.limit; i++) {
      this.x[i] = this.d * sin(i / this.f) + this.xshift + random(-this.flux, this.flux);
      this.y[i] = this.d * cos(i / this.f) + this.yshift + random(-this.flux, this.flux);
    }
  }

  display() {
    this.count++;
    stroke(100, 200, 200, 100);
    fill(0, 0, 0, 50);
    beginShape();

    for (let i = 0; i < this.limit; i++) {

      //scaling
      this.s = sin(this.count / 10);
      this.x[i] -= this.s * sin(i / this.f);
      this.y[i] -= this.s * cos(i / this.f);

      if (this.mC % 2 == 0) {
        this.theta = floor(random(360));
        //this.limit = floor(random(150, 300));
      }
      this.mC++;
      this.mX = 1 * cos(radians(this.theta));
      this.mY = 1 * sin(radians(this.theta)) - noise(this.count);
      this.x[i] += this.mX;
      this.y[i] += this.mY;

      this.y[i]--;

      let m = 1 + minute() % 5;
      this.x[i] -= m * sin(this.count / this.wave);
      //this.x[i] -= tan(this.count / 10) * cos(this.count);

      curveVertex(this.x[i], this.y[i]);
    }
    endShape(CLOSE);

    //reset 
    if (this.y[0] < 0 || this.x[0] > this.w) {
      this.xshift = random(this.high, this.low);
      for (let i = 0; i < this.limit; i++) {
        this.wave = random(1, 100);
        //this.limit2 = floor(random(10, 50));
        this.x[i] = this.d * sin(i / this.f) + this.xshift + random(-this.flux, this.flux);
        this.y[i] = this.d * cos(i / this.f) + this.yshift + random(-this.flux, this.flux);
      }
    }

  }
}
