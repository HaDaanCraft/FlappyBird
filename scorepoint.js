function scorepoint() {

  this.yscore = height/2;
  this.x = width;
  this.speed = 7;

  this.hits = function(bird) {
    if (this.yscore == bird.y) {
      return true;
    }
  }

  this.show = function(){
    fill(255);
    ellipse(this.x, this.yscore, 16, 16)
  }

  this.hits = function(bird) {
    if (bird.y < 350 && bird.y > 250) {
      if (this.x == 64) {
        return true;
      }
    }
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w)  {
      return true;
    } else {
      return false;
    }

  }


}
