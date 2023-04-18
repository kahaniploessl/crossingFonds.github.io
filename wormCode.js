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
    this.xshift = 0;
    this.yshift = 0;
    this.high = _high;
    this.low = _low;
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
