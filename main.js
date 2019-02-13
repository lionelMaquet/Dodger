let canvasWidth = window.innerWidth - 30;
let canvasHeight = window.innerHeight - 30;
let bgColor = [150,150,150]
let birdColor = [0,0,0];
let birdWidth = 20;
let gravity = 5;






let bird = {
  x : canvasWidth / 4 ,
  y : canvasHeight / 2 ,
  width: birdWidth,
  fly : {
    level: 100,
    increase : function() {

      if (mouseIsPressed == false) {

        if (bird.fly.level < 100) {
          bird.fly.level+=1
        }

      }

    },
    display: function(){
      fill(255);
      rect(50,50,bird.fly.level,50)
    },
  },


  display : function() {
    fill(birdColor[0],birdColor[1],birdColor[2]);
    ellipse(this.x,this.y,this.width,this.width);
  },

  move : function(){
    console.log(bird.fly.level)

    if (bird.y < canvasHeight) {
      bird.y += gravity;

    }


    if (bird.fly.level >= 0) {

      if (mouseIsPressed == true) {

        if (!bird.hitsTopLimit()) {
          bird.fly.level-=1.5
          bird.y-= gravity * 3
        }

      }

    }

  },

  hitsTopLimit : function() {
    return (bird.y < 0 )
  },



};

class enemy {
  constructor() {
    this.x = canvasWidth;
    this.y = Math.floor(Math.random() * canvasHeight);
    this.minSize = 15;
    this.maxSize = 200;
    this.minSpeed = 5;
    this.maxSpeed = 15;
    this.speed = this.maxSpeed - Math.floor(Math.random() * this.maxSpeed - this.minSpeed)
    this.width = this.maxSize - Math.floor(Math.random() * this.maxSize - this.minSize)
  }

  display() {
    fill(255,0,0)
    rect(this.x,this.y, this.width, this.width)
  }

  move() {
    this.x -= this.speed
  }

  hitsPlayer() {
    if ((bird.x + bird.width) > this.x && (bird.x - bird.width) < (this.x + this.width)) {
      if ((bird.y - bird.width) < (this.y + this.width) && (bird.y + bird.width) > this.y) {
        background(100,100,100)
      }
    }
  }

  handle() {
    this.display();
    this.move();
    this.hitsPlayer()
  }

}
let enemies = [new enemy()];

function createEnemies() {
  if (enemies[enemies.length -1].x < canvasWidth / 1.1) {
    enemies.push(new enemy())
  }
}

function deleteEnemies() {
  if ((enemies[0].x + enemies[0].width) < 0) {
    enemies.shift()
  }
}



function setup() {
  angleMode(DEGREES);
  createCanvas(canvasWidth,canvasHeight);
  background(bgColor[0],bgColor[1],bgColor[2]);
  enemy1 = new enemy()
}

function draw() {
  background(bgColor[0],bgColor[1],bgColor[2]);
  bird.display()
  bird.move()
  bird.fly.increase()
  bird.fly.display()
  createEnemies()
  deleteEnemies()

  for (each of enemies) {
    each.handle()
  }

}
