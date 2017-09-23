function Pipe() {

    var spacing = random(70, 200);
    var centery = random(spacing, height - spacing);

    this.top = centery - spacing / 2;
    this.bottom = height - (centery + spacing / 2);
    this.x = width;
    this.w = 40;
    this.speed = 3;

    this.highlight = false;

    this.hits = function (bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        //this.highlight = false;
        return false;
    }

    this.show = function () {
        fill(255);  // p5
        if (this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);  // p5
        rect(this.x, height - this.bottom, this.w, this.bottom);    // p5
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function () {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}