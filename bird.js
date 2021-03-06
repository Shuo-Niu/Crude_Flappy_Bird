﻿function Bird() {
    this.y = height / 2;    // p5
    this.x = 75;

    this.gravity = 1;
    this.velocity = 0;

    this.show = function () {
        fill(255);  // p5
        ellipse(this.x, this.y, 32, 32);    // p5
    }

    this.up = function () {
        this.velocity += -this.gravity * 20;
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}